import React, { Component, ReactNode } from "react";
import PropTypes from "prop-types";

type TextH6Props = {
    classname?: string;
    children?: ReactNode;
};

/**
 * Atom: Title H6
 *
 * @param classname : string
 * @param children : ReactNode
 */
export default class TextH6 extends Component<TextH6Props> {
    static propTypes = {
        classname: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ])
    };

    render() {
        const { classname = "", children } = this.props;

        return (
            <h6 className={`a-titleH6 ${classname}`}>
                {children}
            </h6>
        );
    }
}