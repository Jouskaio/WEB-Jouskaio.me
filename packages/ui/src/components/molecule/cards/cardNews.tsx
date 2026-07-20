import type { CSSProperties } from 'react';

import PinNews from '../feed/pinNews';
import TextH5 from '../../atom/text/textH5';

export type CardNewsTag = {
    name?: string;
    color?: string;
    slug?: string;
};

export type CardNewsArticle = {
    media: string;
    tags: CardNewsTag[];
    title: string;
    text: string;
    url: string;
    classname?: string;
};

export type CardNewsProps = {
    article: CardNewsArticle[];
    classname?: string;
    style?: CSSProperties;
    aosDuration?: number;
    aosEffect?: string;
};

/**
 * Molecule: Card News
 */
export default function CardNews({
                                     article,
                                     classname = '',
                                     style,
                                     aosDuration,
                                     aosEffect,
                                 }: CardNewsProps) {
    return (
        <div
            className={`m-cardNews ${classname}`.trim()}
            style={style}
            data-aos={aosEffect}
            data-aos-duration={aosDuration}
        >
            <TextH5 classname="m-cardNews__a-title">
                Latest Articles
            </TextH5>

            {article.map((item) => (
                <PinNews
                    key={item.url}
                    title={item.title}
                    text={item.text}
                    media={item.media}
                    url={item.url}
                    tags={item.tags}
                    classname={item.classname}
                />
            ))}
        </div>
    );
}