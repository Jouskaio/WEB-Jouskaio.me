import type { ReactNode } from 'react';

export type TextH2Props = {
    classname?: string;
    children?: ReactNode;
};

/**
 * Atom: Title H2
 */
export default function TextH2({
                                   classname = '',
                                   children,
                               }: TextH2Props) {
    return <h2 className={`a-titleH2 ${classname}`.trim()}>{children}</h2>;
}
