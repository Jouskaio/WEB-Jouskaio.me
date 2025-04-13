import React, { Component, ReactNode } from "react";
import PropTypes from "prop-types";

type TextH1Props = {
    classname?: string;
    children?: ReactNode;
};

/**
 * Atom: Title H1
 *
 * @param classname : string
 * @param children : ReactNode
 */
export default class TextH1 extends Component<TextH1Props> {
    static propTypes = {
        classname: PropTypes.string,
        children: PropTypes.any
    };

    render() {
        const { classname = "", children } = this.props;

        return (
            <h1 className={`a-titleH1 ${classname}`}>
                {children}
            </h1>
        );
    }
}