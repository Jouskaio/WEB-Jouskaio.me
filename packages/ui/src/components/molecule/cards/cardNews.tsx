import React, { type CSSProperties } from 'react';

import PinNews from '../feed/pinNews';
import TextH5 from '../../atom/text/textH5';

/**
 * Structure of a tag for an article.
 */
export type CardNewsTag = {
    /**
     * Tag name.
     */
    name?: string;
    /**
     * Tag color (hexadecimal code).
     */
    color?: string;
    /**
     * Slug for the tag URL.
     */
    slug?: string;
};

/**
 * Structure of a blog article.
 */
export type CardNewsArticle = {
    /**
     * Cover image URL.
     */
    media: string;
    /**
     * List of associated tags.
     */
    tags: CardNewsTag[];
    /**
     * Article title.
     */
    title: string;
    /**
     * Summary or excerpt of the article.
     */
    text: string;
    /**
     * URL of the full article.
     */
    url: string;
    /**
     * Additional CSS classes for the PinNews element.
     */
    classname?: string;
};

/**
 * Properties of the CardNews component.
 */
export type CardNewsProps = {
    /**
     * List of articles to display.
     */
    article: CardNewsArticle[];
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
 * Molecule Component: Card News
 * A card displaying the latest blog articles.
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
            data-aos={aosEffect || undefined}
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