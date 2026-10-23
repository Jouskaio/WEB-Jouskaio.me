import type { CSSProperties } from 'react';

/**
 * Skeleton component properties.
 */
export type SkeletonProps = {
    /**
     * Shape of the placeholder: a line of text, a title, a thumbnail or a block that fills its container.
     */
    variant?: 'text' | 'title' | 'image' | 'block';
    /**
     * Width, when the default of the shape does not fit (CSS value or number of pixels).
     */
    width?: number | string;
    /**
     * Height, when the default of the shape does not fit (CSS value or number of pixels).
     */
    height?: number | string;
    /**
     * Additional CSS classes.
     */
    classname?: string;
};

/**
 * Atom Component: Skeleton
 *
 * A grey shape with a soft light sweeping over it, shown in place of the content while it loads. It is hidden from
 * screen readers: put a status text next to a group of skeletons. The sweep stops for visitors who asked for
 * reduced motion.
 */
export default function Skeleton({ variant = 'text', width, height, classname = '' }: SkeletonProps) {
    const style: CSSProperties = {};
    if (width !== undefined) style.width = width;
    if (height !== undefined) style.height = height;

    return (
        <span
            className={`a-skeleton a-skeleton--${variant} ${classname}`.trim()}
            style={style}
            aria-hidden="true"
        />
    );
}
