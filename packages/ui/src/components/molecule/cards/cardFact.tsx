import React, { type CSSProperties } from 'react';

/**
 * Properties of the CardFact component.
 */
export type CardFactProps = {
    /**
     * Short label in capital letters (e.g., "Based").
     */
    label: string;
    /**
     * The fact.
     */
    text: string;
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * Inline CSS styles.
     */
    style?: CSSProperties;
    /**
     * AOS animation duration in milliseconds.
     */
    aosDuration?: number;
    /**
     * AOS animation effect (e.g., "fade-left").
     */
    aosEffect?: string;
};

/**
 * Molecule Component: Card Fact
 * A small glass tile with a label and one fact.
 */
export default function CardFact({ label, text, classname = '', style, aosDuration, aosEffect }: CardFactProps) {
    return (
        <div
            className={`m-cardFact ${classname}`.trim()}
            style={style}
            data-aos={aosEffect || undefined}
            data-aos-duration={aosDuration}
        >
            <span className="m-cardFact__a-label">{label}</span>
            <span className="m-cardFact__a-text">{text}</span>
        </div>
    );
}
