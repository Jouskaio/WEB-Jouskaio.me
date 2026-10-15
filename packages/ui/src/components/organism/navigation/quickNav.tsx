import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { socialLinks } from '../../../lib/socialLinks';

/**
 * A case study shown as a card.
 */
export type QuickNavProject = {
    /**
     * Name of the project.
     */
    name: string;
    /**
     * One line describing the project.
     */
    tagline: string;
    /**
     * Destination URL.
     */
    url: string;
    /**
     * Technologies of the project.
     */
    tags?: string[];
    /**
     * Icon of the project (served by the website).
     */
    icon?: string;
};

/**
 * A downloadable file (my CV in one language).
 */
export type QuickNavDownload = {
    /**
     * Displayed name.
     */
    name: string;
    /**
     * File URL.
     */
    url: string;
    /**
     * Language of the file (e.g., "fr").
     */
    lang: string;
};

/**
 * Properties of the QuickNav component.
 */
export type QuickNavProps = {
    /**
     * Case studies, shown as cards.
     */
    projects: QuickNavProject[];
    /**
     * Page listing all my work.
     */
    workUrl: string;
    /**
     * CVs to download, one per language.
     */
    resumes: QuickNavDownload[];
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

/**
 * Organism Component: QuickNav
 * Quick navigation: the case studies, the way to get in touch (email, CV to download), my social
 * networks and a way back to the top.
 */
export default function QuickNav({
    projects,
    workUrl,
    resumes,
    email,
    onNavigate,
    classname = '',
}: QuickNavProps) {
    const [copied, setCopied] = useState(false);

    const goToTop = () => {
        onNavigate?.();
        requestAnimationFrame(() => window.scrollTo({ top: 0 }));
    };

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email as string);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch (error) {
            setCopied(false);
        }
    };

    return (
        <nav className={`o-quickNav ${classname}`.trim()} aria-label="Quick navigation">
            <section className="o-quickNav__m-block" aria-labelledby="quicknav-work">
                <h3 id="quicknav-work" className="o-quickNav__a-heading">
                    Case studies
                </h3>
                <ul className="o-quickNav__m-cards">
                    {projects.map((project, index) => (
                        <li key={project.url + project.name} style={{ '--i': index } as React.CSSProperties}>
                            <Link href={project.url} legacyBehavior>
                                <a className="o-quickNav__m-card" onClick={onNavigate}>
                                    <span className="o-quickNav__a-cardIcon" aria-hidden="true">
                                        {project.icon ? (
                                            // A plain <img>: the icons are small static files, no need for the image optimizer (which refuses SVG)
                                            <img src={project.icon} alt="" width={40} height={40} />
                                        ) : (
                                            project.name.charAt(0)
                                        )}
                                    </span>
                                    <span className="o-quickNav__m-cardText">
                                        <span className="o-quickNav__a-cardName">{project.name}</span>
                                        <span className="o-quickNav__a-cardTagline">{project.tagline}</span>
                                        {project.tags && (
                                            <span className="o-quickNav__m-tags">
                                                {project.tags.map((tag) => (
                                                    <span key={tag} className="o-quickNav__a-tag">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </span>
                                        )}
                                    </span>
                                    <span className="o-quickNav__a-arrow" aria-hidden="true">
                                        →
                                    </span>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link href={workUrl} legacyBehavior>
                    <a className="o-quickNav__a-more" onClick={onNavigate}>
                        All work <span aria-hidden="true">→</span>
                    </a>
                </Link>
            </section>

            <section className="o-quickNav__m-block" aria-labelledby="quicknav-contact">
                <h3 id="quicknav-contact" className="o-quickNav__a-heading">
                    Get in touch
                </h3>
                {email && (
                    <button type="button" className="o-quickNav__a-button" onClick={copyEmail}>
                        {copied ? 'Email address copied' : 'Copy my email address'}
                    </button>
                )}
                <p className="o-quickNav__a-status" role="status">
                    {copied ? 'Email address copied.' : ''}
                </p>
                <ul className="o-quickNav__m-downloads">
                    {resumes.map((resume) => (
                        <li key={resume.url}>
                            <a
                                href={resume.url}
                                className="o-quickNav__a-button o-quickNav__a-button--outline"
                                download
                                lang={resume.lang}
                            >
                                {resume.name} <span aria-hidden="true">↓</span>
                                <span className="o-quickNav__a-hint"> (PDF)</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="o-quickNav__m-block" aria-labelledby="quicknav-follow">
                <h3 id="quicknav-follow" className="o-quickNav__a-heading">
                    Follow
                </h3>
                <ul className="o-quickNav__m-socials">
                    {socialLinks.map((link, index) => (
                        <li key={link.href} style={{ '--i': index } as React.CSSProperties}>
                            <a
                                href={link.href}
                                className="o-quickNav__a-social"
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${link.alt} (new tab)`}
                            >
                                <Image src={link.icon} alt="" width={24} height={24} />
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            <button type="button" className="o-quickNav__a-top" onClick={goToTop}>
                Back to the top <span aria-hidden="true">↑</span>
            </button>
        </nav>
    );
}
