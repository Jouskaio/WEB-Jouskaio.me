import type { ReactNode } from 'react';

export type TextH3Props = {
    classname?: string;
    children?: ReactNode;
};

/**
 * Atom: Title H3
 */
export default function TextH3({
                                   classname = '',
                                   children,
                               }: TextH3Props) {
    return <h3 className={`a-titleH3 ${classname}`.trim()}>{children}</h3>;
}
