import React, { Component, ReactNode } from "react";
import PropTypes from "prop-types";

type TextH2Props = {
    classname?: string;
    children?: ReactNode;
};

/**
 * Atom: Title H2
 *
 * @param classname : string
 * @param children : ReactNode
 */
export default class TextH2 extends Component<TextH2Props> {
    static propTypes = {
        classname: PropTypes.string,
        children: PropTypes.any
    };

    render() {
        const { classname = "", children } = this.props;

        return (
            <h2 className={`a-titleH2 ${classname}`}>
                {children}
            </h2>
        );
    }
}