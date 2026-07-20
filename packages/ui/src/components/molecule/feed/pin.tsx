import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { shimmer, toBase64 } from '../../../lib/preload/preload-image';
import Tag from '../../atom/text/tag';
import TextH4 from '../../atom/text/textH4';

export type PinTag = {
    name?: string;
    color?: string;
    slug?: string;
};

export type PinSize = 'small' | 'medium' | 'large';

export type PinProps = {
    tags?: PinTag[];
    title?: string;
    text?: string;
    media?: string;
    url?: string;
    size: PinSize;
    classname?: string;
    style?: CSSProperties;
};

/**
 * Molecule: Pin
 */
export default function Pin({
                                tags = [],
                                title = '',
                                text = '',
                                media = '',
                                url = '#',
                                size,
                                classname = '',
                                style,
                            }: PinProps) {
    const renderTags = () => {
        if (tags.length === 0) {
            return null;
        }

        return (
            <div className={`m-pin__m-tags m-pin__m-tags--${size}`}>
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
        );
    };

    return (
        <article
            className={`m-pin m-pin--${size} ${classname}`.trim()}
            style={style}
        >
            {media && (
                <div className={`m-pin__a-mediaWrapper m-pin__a-mediaWrapper--${size}`}>
                    <Image
                        src={media}
                        fill
                        sizes="(max-width: 768px) 100vw, 600px"
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer('600', '400')
                        )}`}
                        className={`m-pin__a-image m-pin__a-image--${size}`}
                        alt={title}
                    />
                </div>
            )}

            {renderTags()}

            {title && (
                <TextH4 classname={`m-pin__a-title m-pin__a-title--${size}`}>
                    {title}
                </TextH4>
            )}

            {text && (
                <p className={`m-pin__a-text m-pin__a-text--${size}`}>
                    {text}
                </p>
            )}

            <Link href={url} legacyBehavior>
                <a className={`m-pin__a-link m-pin__a-link--${size}`}>Read More</a>
            </Link>
        </article>
    );
}
