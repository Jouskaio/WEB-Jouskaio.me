import React, { Component, ReactNode } from "react";
import PropTypes from "prop-types";

type TextDefaultProps = {
    classname?: string;
    children?: ReactNode;
};

/**
 * Atom: Text
 *
 * @param classname : string
 * @param children : ReactNode
 */
export default class TextDefault extends Component<TextDefaultProps> {
    static propTypes = {
        classname: PropTypes.string,
        children: PropTypes.any,
    };

    render() {
        const { classname = "", children } = this.props;

        return (
            <span className={`a-text ${classname}`}>
        {children}
      </span>
        );
    }
}