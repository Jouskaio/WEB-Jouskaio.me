import type { ReactNode } from 'react';

export type TextH1Props = {
    classname?: string;
    children?: ReactNode;
};

/**
 * Atom: Title H1
 */
export default function TextH1({
                                   classname = '',
                                   children,
                               }: TextH1Props) {
    return <h1 className={`a-titleH1 ${classname}`.trim()}>{children}</h1>;
}
