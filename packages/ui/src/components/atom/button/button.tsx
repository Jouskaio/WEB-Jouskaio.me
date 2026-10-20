import Link from 'next/link';
import type { MouseEventHandler, ReactNode } from 'react';

/**
 * Button component properties.
 */
export type ButtonProps = {
    /**
     * Destination URL of the link.
     */
    src: string;
    /**
     * Function called when the button is clicked.
     */
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * Button content (text, icon, etc.).
     */
    children?: ReactNode;
    /**
     * "solid" (default) is filled with the accent color, "outline" only has a border.
     */
    variant?: 'solid' | 'outline';
    /**
     * The file is downloaded instead of opened.
     */
    download?: boolean;
    /**
     * The link opens in a new tab (and a plain `<a>` is used instead of the router link).
     */
    external?: boolean;
    /**
     * Language of the destination, when it differs from the page (e.g., "fr").
     */
    lang?: string;
};

/**
 * Atom Component: Button
 *
 * A styled button that acts as an internal or external link via Next.js Link.
 */
export default function Button({
                                   src,
                                   onClick,
                                   classname = '',
                                   children,
                                   variant = 'solid',
                                   download = false,
                                   external = false,
                                   lang,
                               }: ButtonProps) {
    const className = `a-button ${variant === 'outline' ? 'a-button--outline' : ''} ${classname}`
        .replace(/\s+/g, ' ')
        .trim();

    // A file, an address that is not a page of the site or a new tab: a plain link, the router has nothing to do
    if (download || external || /^(https?:|mailto:|tel:)/.test(src)) {
        return (
            <a
                href={src}
                onClick={onClick}
                className={className}
                lang={lang}
                download={download || undefined}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
            >
                {children}
                {external && <span className="a-button__a-hint"> (new tab)</span>}
            </a>
        );
    }

    return (
        <Link href={src} legacyBehavior>
            <a onClick={onClick} className={className} lang={lang}>
                {children}
            </a>
        </Link>
    );
}
