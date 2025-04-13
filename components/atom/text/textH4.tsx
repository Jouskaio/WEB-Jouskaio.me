import React, { Component, ReactNode } from "react";
import PropTypes from "prop-types";

type TextH4Props = {
    classname?: string;
    children?: ReactNode;
};

/**
 * Atom: Title H4
 *
 * @param classname : string
 * @param children : ReactNode
 */
export default class TextH4 extends Component<TextH4Props> {
    static propTypes = {
        classname: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.element,
            PropTypes.arrayOf(PropTypes.node)
        ])
    };

    render() {
        const { classname = "", children } = this.props;

        return (
            <h4 className={`a-titleH4 ${classname}`}>
                {children}
            </h4>
        );
    }
}