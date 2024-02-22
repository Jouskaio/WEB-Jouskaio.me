import {Component} from "react";
import PropTypes from "prop-types";

/**
 * Atom: Text
 *
 * @param props
 * @param classname : string
 * @constructor
 */
export default class TextDefault extends Component {

    static propTypes = {
        classname: PropTypes.string,
        children: PropTypes.any
    }

    render() {
        const {
            // @ts-ignore
            classname,
            // @ts-ignore
            children
        } = this.props

        return (
            <>
                <span className={"a-text " + classname}>{children}</span>
            </>
        );
    }
}