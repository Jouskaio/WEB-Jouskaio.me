import type { ReactNode } from 'react';

export type TextMarkedProps = {
    classname?: string;
    children?: ReactNode;
};

/**
 * Atom: Text Marked
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