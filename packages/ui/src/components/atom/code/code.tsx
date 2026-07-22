import React from 'react';
import _Highlight from 'react-highlight';

const Highlight: any = (_Highlight as any).default || _Highlight;

/**
 * Code component properties.
 */
export type CodeProps = {
    /**
     * The source code to display.
     */
    children?: string;
    /**
     * The programming language for syntax highlighting (e.g., 'javascript', 'html').
     */
    language?: string;
    /**
     * Additional CSS classes.
     */
    classname?: string;
};

/**
 * Atom Component: Code
 *
 * Displays a code block with syntax highlighting.
 */
const Code = ({
    classname = '',
    language = '',
    children = '',
}: CodeProps) => {
    return (
        <Highlight className={`a-code ${classname} ${language}`.trim()}>
            {children}
        </Highlight>
    );
};

export default Code;
