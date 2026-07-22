import Link from 'next/link';
import type { ReactNode } from 'react';

/**
 * TextLink component properties.
 */
export type TextLinkProps = {
    /**
     * Destination URL for the link.
     */
    src: string;
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * Link content.
     */
    children?: ReactNode;
};

/**
 * Atom Component: TextLink
 *
 * A stylized text link using Next.js Link.
 */
export default function TextLink({
                                     src,
                                     classname = '',
                                     children,
                                 }: TextLinkProps) {
    return (
        <Link href={src} legacyBehavior>
            <a className={`a-link ${classname}`.trim()}>{children}</a>
        </Link>
    );
}
