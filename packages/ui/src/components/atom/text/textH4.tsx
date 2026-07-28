import React, { type ReactNode } from 'react';

/**
 * TextH4 component properties.
 */
export type TextH4Props = {
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * H4 title content.
     */
    children?: ReactNode;
};

/**
 * Atom Component: Title H4
 *
 * Stylized level 4 title.
 */
export default function TextH4({
                                   classname = '',
                                   children,
                               }: TextH4Props) {
    return <h4 className={`a-titleH4 ${classname}`.trim()}>{children}</h4>;
}
