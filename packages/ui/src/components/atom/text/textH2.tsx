import type { ReactNode } from 'react';

/**
 * TextH2 component properties.
 */
export type TextH2Props = {
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * H2 title content.
     */
    children?: ReactNode;
};

/**
 * Atom Component: Title H2
 *
 * Stylized level 2 title.
 */
export default function TextH2({
                                   classname = '',
                                   children,
                               }: TextH2Props) {
    return <h2 className={`a-titleH2 ${classname}`.trim()}>{children}</h2>;
}
