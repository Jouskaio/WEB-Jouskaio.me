import Link from 'next/link';
import type { MouseEventHandler, ReactNode } from 'react';

export type ButtonProps = {
    src: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    classname?: string;
    children?: ReactNode;
};

/**
 * Atom: Button
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
