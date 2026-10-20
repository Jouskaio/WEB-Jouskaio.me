import type { ReactNode } from 'react';

/**
 * Chip component properties.
 */
export type ChipProps = {
    /**
     * Content of the chip (a short word or two).
     */
    children: ReactNode;
    /**
     * Additional CSS classes.
     */
    classname?: string;
};

/**
 * Atom Component: Chip
 *
 * A small rounded label for a skill, a technology or a keyword. It is not interactive: wrap it in a list item.
 */
export default function Chip({ children, classname = '' }: ChipProps) {
    return <span className={`a-chip ${classname}`.trim()}>{children}</span>;
}
