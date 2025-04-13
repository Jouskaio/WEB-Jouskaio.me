import React, { Component, ReactNode } from "react";
import PropTypes from "prop-types";

type TextMarkedProps = {
    classname?: string;
    children?: ReactNode;
};

/**
 * Atom: Text Marked
 *
 * @param classname : string
 * @param children : ReactNode
 */
export default class TextMarked extends Component<TextMarkedProps> {
    static propTypes = {
        classname: PropTypes.string,
        children: PropTypes.any,
    };

    render() {
        const { classname = "", children } = this.props;

        return (
            <span className={`a-textMarked ${classname}`}>
        {children}
                <span className="a-textMarked--mark" />
      </span>
        );
    }
}