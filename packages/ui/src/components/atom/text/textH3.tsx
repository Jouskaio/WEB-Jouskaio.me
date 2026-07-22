import type { ReactNode } from 'react';

/**
 * TextH3 component properties.
 */
export type TextH3Props = {
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * H3 title content.
     */
    children?: ReactNode;
};

/**
 * Atom Component: Title H3
 *
 * Stylized level 3 title.
 */
export default function TextH3({
                                   classname = '',
                                   children,
                               }: TextH3Props) {
    return <h3 className={`a-titleH3 ${classname}`.trim()}>{children}</h3>;
}
