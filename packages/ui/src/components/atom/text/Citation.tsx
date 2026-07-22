import type { ReactNode } from 'react';

/**
 * Citation component properties.
 */
export type CitationProps = {
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * Citation content.
     */
    children?: ReactNode;
};

/**
 * Atom Component: Citation
 *
 * Displays a citation wrapped in a blockquote tag with styled quotation marks.
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
