import type { ReactNode } from 'react';

export type TagProps = {
    classname?: string;
    children?: ReactNode;
    color: string;
    slug: string;
};

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
