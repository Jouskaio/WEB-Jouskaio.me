import type { CSSProperties } from 'react';

import TextDefault from '../../atom/text/TextDefault';
import TextH1 from '../../atom/text/textH1';

const MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

/**
 * Properties of the CardInfos component.
 */
export type CardInfosProps = {
    /**
     * Date to display (string format compatible with Date).
     */
    date: string;
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * Inlined CSS styles.
     */
    style?: CSSProperties;
    /**
     * Message or informational content.
     */
    children: string;
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
 * Molecule Component: Card Infos
 * A card displaying a date (day, month, year) and an information message.
 */
export default function CardInfos({
                                      date,
                                      classname = '',
                                      style,
                                      children,
                                      aosDuration,
                                      aosEffect,
                                  }: CardInfosProps) {
    const datetime = new Date(date);

    const day = datetime.getDate();
    const mmYY = `${MONTH_NAMES[datetime.getMonth()]} ${datetime.getFullYear()}`;

    return (
        <div
            className={`m-cardInfos ${classname}`.trim()}
            style={style}
            data-aos={aosEffect}
            data-aos-duration={aosDuration}
        >
            <div className="m-cardInfos__m-datetime">
                <TextH1 classname="m-cardInfos__m-datetime--a-day">
                    {day}
                </TextH1>

                <TextDefault classname="m-cardInfos__m-datetime--a-mmYY">
                    {mmYY}
                </TextDefault>
            </div>

            <TextDefault classname="m-cardInfos__m-message">
                {children}
            </TextDefault>
        </div>
    );
}