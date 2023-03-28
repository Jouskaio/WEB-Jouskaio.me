import {Component} from "react";
import PropTypes from "prop-types";

/**
 *
 * @param props
 * @param classname : string
 * @constructor
 */
export default class TextH3 extends Component{
    static propTypes = {
        classname: PropTypes.string,
        children: PropTypes.any
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
                <h3 className={"a-titleH3 " + classname}>{children}</h3>
            </>
        );
    }
}