import React, { type CSSProperties } from 'react';

import PinNews from '../feed/pinNews';
import Skeleton from '../../atom/skeleton/skeleton';
import TextDefault from '../../atom/text/textDefault';
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
     * Reading time of the article, in minutes.
     */
    readingTime?: number;
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
     * The articles are still being fetched: skeletons are shown in place of the list.
     */
    loading?: boolean;
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
                                     loading = false,
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
            aria-busy={loading || undefined}
        >
            <TextH5 classname="m-cardNews__a-title">
                Latest Articles
            </TextH5>

            {loading && article.length === 0 && (
                <>
                    <span className="a-skeleton__a-label" role="status">
                        Loading the latest articles
                    </span>
                    {[0, 1, 2].map((index) => (
                        <div key={index} className="m-pinNews m-cardNews__m-skeleton">
                            <div className="m-pinNews__m-divText m-cardNews__m-skeletonText">
                                <Skeleton variant="title" />
                                <Skeleton />
                                <Skeleton width="85%" />
                                <Skeleton width="50%" />
                            </div>
                            <Skeleton variant="image" classname="m-pinNews__a-image" />
                        </div>
                    ))}
                </>
            )}

            {!loading && article.length === 0 && (
                <TextDefault>
                    The latest articles could not be loaded. <a href="https://blog.jouskaio.me">Read the blog</a>
                </TextDefault>
            )}

            {article.map((item) => (
                <PinNews
                    key={item.url}
                    title={item.title}
                    text={item.text}
                    media={item.media}
                    url={item.url}
                    tags={item.tags}
                    readingTime={item.readingTime}
                    classname={item.classname}
                />
            ))}
        </div>
    );
}