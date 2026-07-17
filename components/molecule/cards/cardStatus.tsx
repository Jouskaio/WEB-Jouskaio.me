import type { CSSProperties } from 'react';

import TextDefault from '../../atom/text/TextDefault';
import TextH4 from '../../atom/text/textH4';

export type CardStatusProps = {
    title: string;
    text: string;
    color: string;
    classname?: string;
    aosDuration?: number;
    aosEffect?: string;
    style?: CSSProperties;
};

/**
 * Molecule: Card Status
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