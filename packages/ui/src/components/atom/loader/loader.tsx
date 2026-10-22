import type { CSSProperties } from 'react';

/**
 * Loader component properties.
 */
export type LoaderProps = {
    /**
     * What is loading, read by screen readers and shown under the ring (e.g., "Loading video").
     */
    label?: string;
    /**
     * Hides the text under the ring, the label stays available to screen readers.
     */
    hideLabel?: boolean;
    /**
     * Centers the loader in the whole window, for a page that is not ready yet.
     */
    fullPage?: boolean;
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
 * Atom Component: Loader
 *
 * A ring in the accent color and a label, while something is loading. The ring slows down to a
 * steady arc for visitors who asked for reduced motion.
 */
export default function Loader({
                                   label = 'Loading',
                                   hideLabel = false,
                                   fullPage = false,
                                   classname = '',
                                   style,
                               }: LoaderProps) {
    const className = `a-loader ${fullPage ? 'a-loader--fullPage' : ''} ${classname}`
        .replace(/\s+/g, ' ')
        .trim();

    return (
        <div className={className} style={style} role="status">
            <span className="a-loader__a-ring" aria-hidden="true" />
            <span className={hideLabel ? 'a-loader__a-label a-loader__a-label--hidden' : 'a-loader__a-label'}>
                {label}
            </span>
        </div>
    );
}
