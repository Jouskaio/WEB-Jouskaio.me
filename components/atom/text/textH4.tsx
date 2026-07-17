import type { ReactNode } from 'react';

export type TextH4Props = {
    classname?: string;
    children?: ReactNode;
};

/**
 * Atom: Title H4
 */
export default function TextH4({
                                   classname = '',
                                   children,
                               }: TextH4Props) {
    return <h4 className={`a-titleH4 ${classname}`.trim()}>{children}</h4>;
}
