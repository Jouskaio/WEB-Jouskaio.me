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
     * Where the title leads (e.g., the blog category of the topic). Without it, the title is only a text.
     */
    href?: string;
    /**
     * Text read by screen readers for the link, when the title alone is not clear enough.
     */
    linkLabel?: string;
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
                                         href,
                                         linkLabel,
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
                // The light theme shows the image blurred under the glass
                '--media': `url("${media}")`,
                ...style,
            } as CSSProperties}
            data-aos={aosEffect}
            data-aos-duration={aosDuration}
        >
            <div className="m-cardListText__content">
                <TextH4 classname="m-cardListText__a-title">
                    {href ? (
                        <a
                            className="m-cardListText__a-link"
                            href={href}
                            aria-label={linkLabel ?? `${title}: read the articles about it`}
                        >
                            {title} <span aria-hidden="true">→</span>
                        </a>
                    ) : (
                        title
                    )}
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