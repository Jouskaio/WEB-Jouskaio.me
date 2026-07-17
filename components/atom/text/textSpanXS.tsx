import type { ReactNode } from 'react';

export type TextSpanXSProps = {
    classname?: string;
    children?: ReactNode;
};

/**
 * Atom: Text Span XS
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