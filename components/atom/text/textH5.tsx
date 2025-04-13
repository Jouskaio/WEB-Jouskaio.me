import React, { Component, ReactNode } from "react";
import PropTypes from "prop-types";

type TextH5Props = {
    classname?: string;
    children?: ReactNode;
    aosDuration?: number;
    aosEffect?: string;
};

/**
 * Atom: Title H5
 *
 * @param classname : string
 * @param children : ReactNode
 * @param aosEffect : string (ex: fade-up)
 * @param aosDuration : number (en ms)
 */
export default class TextH5 extends Component<TextH5Props> {
    static propTypes = {
        classname: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ]),
        aosDuration: PropTypes.number,
        aosEffect: PropTypes.string,
    };

    render() {
        const {
            classname = "",
            children,
            aosDuration,
            aosEffect,
        } = this.props;

        return (
            <h5
                className={`a-titleH5 ${classname}`}
                data-aos={aosEffect}
                data-aos-duration={aosDuration}
            >
                {children}
            </h5>
        );
    }
}