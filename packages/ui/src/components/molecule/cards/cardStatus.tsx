import type { CSSProperties } from 'react';

import TextDefault from '../../atom/text/TextDefault';
import TextH4 from '../../atom/text/textH4';

/**
 * Properties of the CardStatus component.
 */
export type CardStatusProps = {
    /**
     * Status title (e.g., "Operational services").
     */
    title: string;
    /**
     * Detailed status description.
     */
    text: string;
    /**
     * Color of the vertical status bar (hexadecimal code).
     */
    color: string;
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * AOS animation duration in milliseconds.
     */
    aosDuration?: number;
    /**
     * AOS animation effect (e.g., "fade-up").
     */
    aosEffect?: string;
    /**
     * Inlined CSS styles.
     */
    style?: CSSProperties;
};

/**
 * Molecule Component: Card Status
 * A card displaying a colored status indicator with a title and a description.
 */
export default function CardStatus({
                                       title,
                                       text,
                                       color,
                                       classname = '',
                                       aosDuration,
                                       aosEffect,
                                       style,
                                   }: CardStatusProps) {
    return (
        <div
            className={`m-cardStatus ${classname}`.trim()}
            style={style}
            data-aos={aosEffect}
            data-aos-duration={aosDuration}
        >
            <div
                className="m-cardStatus__a-verticalBar"
                style={{ backgroundColor: color }}
                aria-hidden="true"
            />

            <div>
                <TextH4 classname="m-cardStatus__a-title">
                    {title}
                </TextH4>

                <TextDefault classname="m-cardStatus__a-text">
                    {text}
                </TextDefault>
            </div>
        </div>
    );
}