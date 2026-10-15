import React, { useEffect, useState } from 'react';
import Link from 'next/link';

/**
 * A link of the quick navigation.
 */
export type QuickNavLink = {
    /**
     * Displayed name.
     */
    name: string;
    /**
     * Destination URL (internal or external).
     */
    url: string;
};

/**
 * Properties of the QuickNav component.
 */
export type QuickNavProps = {
    /**
     * Pages of the website.
     */
    pages: QuickNavLink[];
    /**
     * Profiles to contact me on.
     */
    contacts: QuickNavLink[];
    /**
     * Email address the visitor can copy.
     */
    email?: string;
    /**
     * Called when the visitor picks a destination, to close the dialog around the navigation.
     */
    onNavigate?: () => void;
    /**
     * Additional CSS classes.
     */
    classname?: string;
};

type Section = { id: string; label: string };

const isExternal = (url: string) => url.startsWith('http');

/**
 * Organism Component: QuickNav
 * Quick navigation: the sections of the current page (elements marked with `id` and `data-quicknav`),
 * the pages of the website, quick ways to get in touch and a way back to the top.
 */
export default function QuickNav({ pages, contacts, email, onNavigate, classname = '' }: QuickNavProps) {
    const [sections, setSections] = useState<Section[]>([]);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const marked = Array.from(document.querySelectorAll<HTMLElement>('[data-quicknav]'));
        setSections(
            marked
                .filter((element) => element.id)
                .map((element) => ({ id: element.id, label: element.dataset.quicknav || element.id })),
        );
    }, []);

    const goToSection = (event: React.MouseEvent, id: string) => {
        event.preventDefault();
        onNavigate?.();
        // The dialog gives the focus back to its button when it closes: move it to the section afterwards
        requestAnimationFrame(() => {
            const section = document.getElementById(id);
            if (section) {
                section.setAttribute('tabindex', '-1');
                section.focus({ preventScroll: true });
                section.scrollIntoView();
            }
        });
    };

    const goToTop = () => {
        onNavigate?.();
        requestAnimationFrame(() => window.scrollTo({ top: 0 }));
    };

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email as string);
            setCopied(true);
        } catch (error) {
            setCopied(false);
        }
    };

    const renderLink = (link: QuickNavLink) =>
        isExternal(link.url) ? (
            <a href={link.url} className="o-quickNav__a-link" target="_blank" rel="noreferrer">
                {link.name}
                <span className="o-quickNav__a-hint"> (new tab)</span>
            </a>
        ) : (
            <Link href={link.url} legacyBehavior>
                <a className="o-quickNav__a-link" onClick={onNavigate}>
                    {link.name}
                </a>
            </Link>
        );

    return (
        <nav className={`o-quickNav ${classname}`.trim()} aria-label="Quick navigation">
            {sections.length > 0 && (
                <section className="o-quickNav__m-block">
                    <h3 className="o-quickNav__a-heading">On this page</h3>
                    <ul className="o-quickNav__a-list">
                        {sections.map((section) => (
                            <li key={section.id}>
                                <a
                                    href={`#${section.id}`}
                                    className="o-quickNav__a-link"
                                    onClick={(event) => goToSection(event, section.id)}
                                >
                                    {section.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            <section className="o-quickNav__m-block">
                <h3 className="o-quickNav__a-heading">Pages</h3>
                <ul className="o-quickNav__a-list">
                    {pages.map((page) => (
                        <li key={page.url}>{renderLink(page)}</li>
                    ))}
                </ul>
            </section>

            <section className="o-quickNav__m-block">
                <h3 className="o-quickNav__a-heading">Contact</h3>
                <ul className="o-quickNav__a-list">
                    {email && (
                        <li>
                            <button type="button" className="o-quickNav__a-button" onClick={copyEmail}>
                                Copy my email address
                            </button>
                        </li>
                    )}
                    {contacts.map((contact) => (
                        <li key={contact.url}>{renderLink(contact)}</li>
                    ))}
                </ul>
                <p className="o-quickNav__a-status" role="status">
                    {copied ? 'Email address copied.' : ''}
                </p>
            </section>

            <button type="button" className="o-quickNav__a-button" onClick={goToTop}>
                Back to the top
            </button>
        </nav>
    );
}
