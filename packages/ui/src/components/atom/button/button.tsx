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
                               }: ButtonProps) {
    return (
        <Link href={src} legacyBehavior>
            <a onClick={onClick} className={`a-button ${classname}`.trim()}>
                {children}
            </a>
        </Link>
    );
}
