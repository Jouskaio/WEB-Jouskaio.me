import { Component } from 'react';
import Highlight from 'react-highlight';

export type CodeProps = {
    children?: string;
    language?: string;
    classname?: string;
};

/**
 * Atom: Code
 */
export default class Code extends Component<CodeProps> {
    render() {
        const { classname = '', language = '', children = '' } = this.props;

        return (
            <Highlight className={`a-code ${classname} ${language}`.trim()}>
                {children}
            </Highlight>
        );
    }
}
