import type { ReactNode } from 'react';

/**
 * TextH1 component properties.
 */
export type TextH1Props = {
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * H1 title content.
     */
    children?: ReactNode;
};

/**
 * Atom Component: Title H1
 *
 * Stylized level 1 title.
 */
export default function TextH1({
                                   classname = '',
                                   children,
                               }: TextH1Props) {
    return <h1 className={`a-titleH1 ${classname}`.trim()}>{children}</h1>;
}
