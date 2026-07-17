import type { ReactNode } from 'react';

export type CitationProps = {
    classname?: string;
    children?: ReactNode;
};

/**
 * Atom: Citation
 */
export default function Citation({
                                     classname = '',
                                     children,
                                 }: CitationProps) {
    return (
        <blockquote className={`a-citation ${classname}`.trim()}>
            <span>"</span> {children} <span>"</span>
        </blockquote>
    );
}
