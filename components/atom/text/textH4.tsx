import {Component} from "react";
import PropTypes from "prop-types";

/**
 *
 * @param props
 * @param classname : string
 * @constructor
 */
export default class TextH4 extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.any),
            PropTypes.any
        ]),
        classname: PropTypes.string
    }

    render() {
        const {
            //@ts-ignore
            classname,
            //@ts-ignore
            children
        } = this.props
        return (
            <>
                <h4 className={"a-titleH4 " + classname}>{children}</h4>
            </>
        );
    }
}