import type { ReactNode } from 'react';

/**
 * TextMarked component properties.
 */
export type TextMarkedProps = {
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * Text to highlight.
     */
    children?: ReactNode;
};

/**
 * Atom Component: Text Marked
 *
 * Highlighted text with a styled underline or background.
 */
export default function TextMarked({
                                       classname = '',
                                       children,
                                   }: TextMarkedProps) {
    return (
        <span className={`a-textMarked ${classname}`.trim()}>
            {children}
            <span className="a-textMarked--mark" />
        </span>
    );
}