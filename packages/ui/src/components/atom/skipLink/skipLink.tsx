import type { ReactNode } from 'react';

/**
 * Identifier of the place where the content of the page starts.
 */
export const SKIP_LINK_TARGET_ID = 'content';

/**
 * SkipLink component properties.
 */
export type SkipLinkProps = {
    /**
     * Text of the link.
     */
    children?: ReactNode;
    /**
     * Identifier of the element the link goes to (without the "#").
     */
    target?: string;
};

/**
 * Atom Component: SkipLink
 *
 * The first link of the page for keyboard users: invisible until it receives the focus, it jumps over the header and
 * the menu to the content.
 */
export default function SkipLink({ children = 'Skip to content', target = SKIP_LINK_TARGET_ID }: SkipLinkProps) {
    return (
        <a className="a-skipLink" href={`#${target}`}>
            {children}
        </a>
    );
}

/**
 * Atom Component: SkipLinkTarget
 *
 * An empty anchor, placed where the content starts. It takes the focus so the next Tab goes to the content.
 */
export function SkipLinkTarget({ id = SKIP_LINK_TARGET_ID }: { id?: string }) {
    return <span id={id} tabIndex={-1} className="a-skipLink__a-target" />;
}
