import React, { type CSSProperties, type ReactNode } from 'react';

/**
 * Properties of the CardText component.
 */
export type CardTextProps = {
    /**
     * Title of the card.
     */
    title: string;
    /**
     * Text of the card.
     */
    text: string;
    /**
     * Level of the title in the outline of the page (2 by default).
     */
    headingLevel?: 2 | 3;
    /**
     * Actions shown under the text (buttons, links).
     */
    actions?: ReactNode;
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
 * Molecule Component: Card Text
 * A glass card with a short accent bar, a title and a text, and optionally some actions.
 */
export default function CardText({
    title,
    text,
    headingLevel = 2,
    actions,
    classname = '',
    style,
    aosDuration,
    aosEffect,
}: CardTextProps) {
    const Heading = `h${headingLevel}` as 'h2' | 'h3';
    return (
        <div
            className={`m-cardText ${classname}`.trim()}
            style={style}
            data-aos={aosEffect || undefined}
            data-aos-duration={aosDuration}
        >
            <Heading className="m-cardText__a-title">{title}</Heading>
            <p className="m-cardText__a-text">{text}</p>
            {actions && <div className="m-cardText__m-actions">{actions}</div>}
        </div>
    );
}
