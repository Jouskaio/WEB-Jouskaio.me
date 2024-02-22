import React, { Component } from "react";
import TextSpanXS from "../../atom/text/textSpanXS";
import Media from "../../atom/media/media";
import TextDefault from "../../atom/text/TextDefault";
import PropTypes from "prop-types";

/**
 * @param classname: string
 * @param children: any
 * @param alertMessage: string
 * @param aos: object
 * @constructor
 */
class Alert extends Component {
    static propTypes = {
        classname: PropTypes.string,
        children: PropTypes.any,
    }

    render() {
        // @ts-ignore
        const { classname, children} = this.props;

        return (
            <div className={"m-alert " + classname} data-aos={"zoom-in-up"} data-aos-duration={1000}>
                <TextDefault>{children}</TextDefault>
            </div>
        );
    }
}

export default Alert;
