import type { CSSProperties } from 'react';

import TextH4 from '../../atom/text/textH4';
import TextH6 from '../../atom/text/textH6';

export type CardListTextProps = {
    details: string[];
    title: string;
    media: string;
    classname?: string;
    style?: CSSProperties;
    aosDuration?: number;
    aosEffect?: string;
};

/**
 * Molecule: Card List Text
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