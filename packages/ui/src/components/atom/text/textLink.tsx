import Link from 'next/link';
import type { ReactNode } from 'react';

export type TextLinkProps = {
    src: string;
    classname?: string;
    children?: ReactNode;
};

/**
 * Atom: Text Link
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
