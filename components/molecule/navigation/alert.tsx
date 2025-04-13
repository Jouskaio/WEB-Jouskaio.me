import React, { Component, ReactNode } from "react";
import TextDefault from "../../atom/text/TextDefault";
import PropTypes from "prop-types";

type AlertProps = {
    classname?: string;
    children?: ReactNode;
};

/**
 * Molecule: Alert
 *
 * @param classname : string
 * @param children : ReactNode
 */
class Alert extends Component<AlertProps> {
    static propTypes = {
        classname: PropTypes.string,
        children: PropTypes.any,
    };

    render() {
        const { classname = "", children } = this.props;

        return (
            <div
                className={`m-alert ${classname}`}
                data-aos="zoom-in-up"
                data-aos-duration="1000"
            >
                <TextDefault>{children}</TextDefault>
            </div>
        );
    }
}

export default Alert;