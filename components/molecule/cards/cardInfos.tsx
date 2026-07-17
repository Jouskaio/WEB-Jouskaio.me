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

export type CardInfosProps = {
    date: string;
    classname?: string;
    style?: CSSProperties;
    children: string;
    aosDuration?: number;
    aosEffect?: string;
};

/**
 * Molecule: Card Infos
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