import React, { type CSSProperties } from 'react';

import TextDefault from '../../atom/text/TextDefault';
import TextH4 from '../../atom/text/textH4';

/**
 * Structure of an item in the CardMultiStatus component.
 */
export type CardMultiStatusItem = {
    /**
     * Item title.
     */
    title: string;
    /**
     * Item description text.
     */
    text: string;
};

/**
 * Properties of the CardMultiStatus component.
 */
export type CardMultiStatusProps = {
    /**
     * List of items to display.
     */
    items: CardMultiStatusItem[];
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
 * Molecule Component: Card Multi Status
 * A card displaying multiple titled sections with a shared colored status indicator.
 */
export default function CardMultiStatus({
                                           items,
                                           color,
                                           classname = '',
                                           aosDuration,
                                           aosEffect,
                                           style,
                                       }: CardMultiStatusProps) {
    return (
        <div
            className={`m-cardMultiStatus ${classname}`.trim()}
            style={style}
            data-aos={aosEffect || undefined}
            data-aos-duration={aosDuration}
        >
            <div
                className="m-cardMultiStatus__a-verticalBar"
                style={{ backgroundColor: color }}
                aria-hidden="true"
            />

            <div className="m-cardMultiStatus__container">
                {items.map((item, index) => (
                    <div key={index} className="m-cardMultiStatus__item">
                        <TextH4 classname="m-cardMultiStatus__a-title">
                            {item.title}
                        </TextH4>
                        <TextDefault classname="m-cardMultiStatus__a-text">
                            {item.text}
                        </TextDefault>
                    </div>
                ))}
            </div>
        </div>
    );
}
