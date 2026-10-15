import React, { type ReactNode } from 'react';

/**
 * TextDefault component properties.
 */
export type TextDefaultProps = {
    /**
     * Additional CSS classes.
     */
    classname?: string;
    /**
     * Text content or React elements.
     */
    children?: ReactNode;
};

/**
 * Atom Component: TextDefault
 *
 * Basic text component (rendered in a span).
 */
export default function TextDefault({
                                        classname = '',
                                        children,
                                    }: TextDefaultProps) {
    return <span className={`a-text ${classname}`.trim()}>{children}</span>;
}
