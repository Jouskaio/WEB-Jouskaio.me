import Link from 'next/link';
import type { ReactNode } from 'react';

/**
 * StatusBadge component properties.
 */
export type StatusBadgeProps = {
    /**
     * Main text (e.g., "Open to opportunities").
     */
    children: ReactNode;
    /**
     * Secondary text, shown after the main one (e.g., "Permanent or freelance").
     */
    detail?: string;
    /**
     * Destination of the badge. Without it, the badge is only a label.
     */
    src?: string;
    /**
     * Additional CSS classes.
     */
    classname?: string;
};

/**
 * Atom Component: StatusBadge
 *
 * A small pill with a green dot, to tell at first sight what the owner is looking for. It is a link when it has a
 * destination. The text goes to the next line on a narrow screen instead of overflowing.
 */
export default function StatusBadge({ children, detail, src, classname = '' }: StatusBadgeProps) {
    const className = `a-statusBadge ${src ? 'a-statusBadge--link' : ''} ${classname}`.replace(/\s+/g, ' ').trim();

    const content = (
        <>
            <span className="a-statusBadge__a-dot" aria-hidden="true" />
            <span className="a-statusBadge__a-label">{children}</span>
            {detail && <span className="a-statusBadge__a-detail">{detail}</span>}
        </>
    );

    if (!src) {
        return <span className={className}>{content}</span>;
    }

    // Another site or a mail: a plain link, the router has nothing to do
    if (/^(https?:|mailto:|tel:)/.test(src)) {
        return (
            <a href={src} className={className}>
                {content}
            </a>
        );
    }

    return (
        <Link href={src} legacyBehavior>
            <a className={className}>{content}</a>
        </Link>
    );
}
