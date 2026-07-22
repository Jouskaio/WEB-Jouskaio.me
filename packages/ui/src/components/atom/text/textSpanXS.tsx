import type { ReactNode } from 'react';

/**
 * TextSpanXS component properties.
 */
export type TextSpanXSProps = {
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * Text content.
     */
    children?: ReactNode;
};

/**
 * Atom Component: Text Span XS
 *
 * Extra-small text used for metadata or captions.
 */
export default function TextSpanXS({
                                       classname = '',
                                       children,
                                   }: TextSpanXSProps) {
    return (
        <span className={`a-spanXS ${classname}`.trim()}>
            {children}
        </span>
    );
}