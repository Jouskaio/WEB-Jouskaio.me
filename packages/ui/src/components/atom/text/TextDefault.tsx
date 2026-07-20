import type { ReactNode } from 'react';

export type TextDefaultProps = {
    classname?: string;
    children?: ReactNode;
};

/**
 * Atom: Text
 */
export default function TextDefault({
                                        classname = '',
                                        children,
                                    }: TextDefaultProps) {
    return <span className={`a-text ${classname}`.trim()}>{children}</span>;
}
