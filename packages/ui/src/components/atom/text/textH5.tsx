import type { ReactNode } from 'react';

export type TextH5Props = {
    classname?: string;
    children?: ReactNode;
    aosDuration?: number;
    aosEffect?: string;
};

/**
 * Atom: Title H5
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
