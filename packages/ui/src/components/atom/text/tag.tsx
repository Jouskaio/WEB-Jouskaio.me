import type { ReactNode } from 'react';

/**
 * Tag component properties.
 */
export type TagProps = {
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * Tag label.
     */
    children?: ReactNode;
    /**
     * Tag text color (hexadecimal code).
     */
    color: string;
    /**
     * Slug for the tag URL (link to the blog category).
     */
    slug: string;
};

/**
 * Atom Component: Tag
 *
 * Displays a colored tag pointing to a blog category.
 */
export default function Tag({
                                classname = '',
                                children,
                                color,
                                slug,
                            }: TagProps) {
    return (
        <a
            href={`https://blog.jouskaio.me/${slug}`}
            className={`a-tag ${classname}`.trim()}
            style={{ color }}
        >
            {children}
        </a>
    );
}
