import React, { Component, ReactNode } from "react";
import PropTypes from "prop-types";
import Highlight from "react-highlight";

type CodeProps = {
    children?: ReactNode;
    language?: string;
    classname?: string;
};

/**
 * Atom: Code
 *
 * @param language : string (ex: "js", "ts", "html")
 * @param classname : string (ex: "m-block")
 * @param children : code content to highlight
 */
export default class Code extends Component<CodeProps> {
    static propTypes = {
        children: PropTypes.any,
        language: PropTypes.string,
        classname: PropTypes.string,
    };

    render() {
        const { classname = "", language = "", children } = this.props;

        return (
            <Highlight className={`a-code ${classname} ${language}`}>
                {children}
            </Highlight>
        );
    }
}