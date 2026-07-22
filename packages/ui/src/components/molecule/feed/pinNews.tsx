import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { shimmer, toBase64 } from '../../../lib/preload/preload-image';
import Tag from '../../atom/text/tag';
import TextH4 from '../../atom/text/textH4';

/**
 * Structure of a tag for a PinNews.
 */
export type PinNewsTag = {
    /**
     * Tag name.
     */
    name?: string;
    /**
     * Tag color.
     */
    color?: string;
    /**
     * Slug for the tag URL.
     */
    slug?: string;
};

/**
 * Properties of the PinNews component.
 */
export type PinNewsProps = {
    /**
     * List of tags associated with the article.
     */
    tags: PinNewsTag[];
    /**
     * Title of the news or blog article.
     */
    title: string;
    /**
     * Summary or content (supports HTML).
     */
    text: string;
    /**
     * Thumbnail image URL.
     */
    media: string;
    /**
     * URL of the full article.
     */
    url: string;
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * Inlined CSS styles.
     */
    style?: CSSProperties;
};

/**
 * Molecule Component: Pin News
 * A simplified feed element for blog articles with a thumbnail on the side.
 */
export default function PinNews({
                                    tags,
                                    title,
                                    text,
                                    media,
                                    url,
                                    classname = '',
                                    style,
                                }: PinNewsProps) {
    const articleUrl =
        url.startsWith('http://') || url.startsWith('https://')
            ? url
            : new URL(url, 'https://blog.jouskaio.me').toString();

    return (
        <article className={`m-pinNews ${classname}`.trim()} style={style}>
            <div className="m-pinNews__m-divText">
                <Link href={articleUrl} legacyBehavior>
                    <a style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                        <TextH4 classname="m-pinNews__a-title">{title}</TextH4>

                        <div
                            className="a-text"
                            dangerouslySetInnerHTML={{ __html: text }}
                        />
                    </a>
                </Link>

                {tags.length > 0 && (
                    <div className="m-pinNews__m-tags">
                        {tags.map((tag, index) => (
                            <Tag
                                key={`${tag.slug ?? tag.name}-${index}`}
                                color={tag.color ?? 'inherit'}
                                slug={tag.slug ?? '#'}
                                classname="m-pin__a-tag"
                            >
                                {tag.name}
                            </Tag>
                        ))}
                    </div>
                )}
            </div>

            <Link href={articleUrl} legacyBehavior>
                <a style={{ display: 'block', flexShrink: 0 }}>
                    <Image
                        src={media}
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer('100', '55')
                        )}`}
                        width={100}
                        height={55}
                        alt={title}
                        className="m-pinNews__a-image"
                    />
                </a>
            </Link>
        </article>
    );
}
