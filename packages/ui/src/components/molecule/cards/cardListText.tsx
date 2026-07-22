import type { CSSProperties } from 'react';

import TextH4 from '../../atom/text/textH4';
import TextH6 from '../../atom/text/textH6';

/**
 * Properties of the CardListText component.
 */
export type CardListTextProps = {
    /**
     * List of points or details to display.
     */
    details: string[];
    /**
     * Card title.
     */
    title: string;
    /**
     * Background image URL.
     */
    media: string;
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * Inlined CSS styles.
     */
    style?: CSSProperties;
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
 * Molecule Component: Card List Text
 * A card with a background image displaying a title and a list of texts.
 */
export default function CardListText({
                                         details,
                                         title,
                                         media,
                                         classname = '',
                                         style,
                                         aosDuration,
                                         aosEffect = 'fade-up',
                                     }: CardListTextProps) {
    return (
        <div
            className={`m-cardListText ${classname}`.trim()}
            style={{
                backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.4),
                    rgba(0, 0, 0, 0.5)
                ), url("${media}")`,
                ...style,
            }}
            data-aos={aosEffect}
            data-aos-duration={aosDuration}
        >
            <div className="m-cardListText__content">
                <TextH4 classname="m-cardListText__a-title">
                    {title}
                </TextH4>

                {details.map((detail, index) => (
                    <TextH6 key={`${detail}-${index}`}>
                        {detail}
                    </TextH6>
                ))}
            </div>
        </div>
    );
}