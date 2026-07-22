import type { ReactNode } from 'react';

/**
 * TextH6 component properties.
 */
export type TextH6Props = {
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * H6 title content.
     */
    children?: ReactNode;
};

/**
 * Atom Component: Title H6
 *
 * Stylized level 6 title.
 */
export default function TextH6({
                                   classname = '',
                                   children,
                               }: TextH6Props) {
    return <h6 className={`a-titleH6 ${classname}`.trim()}>{children}</h6>;
}
