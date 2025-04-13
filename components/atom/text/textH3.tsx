import React, { Component, ReactNode } from "react";
import PropTypes from "prop-types";

type TextH3Props = {
    classname?: string;
    children?: ReactNode;
};

/**
 * Atom: Title H3
 *
 * @param classname : string
 * @param children : ReactNode
 */
export default class TextH3 extends Component<TextH3Props> {
    static propTypes = {
        classname: PropTypes.string,
        children: PropTypes.any
    };

    render() {
        const { classname = "", children } = this.props;

        return (
            <h3 className={`a-titleH3 ${classname}`}>
                {children}
            </h3>
        );
    }
}