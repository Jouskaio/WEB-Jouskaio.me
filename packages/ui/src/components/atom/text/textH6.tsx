import type { ReactNode } from 'react';

export type TextH6Props = {
    classname?: string;
    children?: ReactNode;
};

/**
 * Atom: Title H6
 */
export default function TextH6({
                                   classname = '',
                                   children,
                               }: TextH6Props) {
    return <h6 className={`a-titleH6 ${classname}`.trim()}>{children}</h6>;
}
