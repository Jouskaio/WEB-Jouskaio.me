import type { ReactNode } from 'react';

/**
 * TextH5 component properties.
 */
export type TextH5Props = {
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * H5 title content.
     */
    children?: ReactNode;
    /**
     * AOS animation duration in milliseconds.
     */
    aosDuration?: number;
    /**
     * AOS animation effect (e.g., "fade-up").
     */
    aosEffect?: string;
};

/**
 * Atom Component: Title H5
 *
 * Stylized level 5 title with AOS animation support.
 */
export default function TextH5({
                                   classname = '',
                                   children,
                                   aosDuration,
                                   aosEffect,
                               }: TextH5Props) {
    return (
        <h5
            className={`a-titleH5 ${classname}`.trim()}
            data-aos={aosEffect}
            data-aos-duration={aosDuration}
        >
            {children}
        </h5>
    );
}
