import {Component} from "react";
import PropTypes from "prop-types";

/**
 * Atom: Text Marked
 *
 * @param props
 * @param classname : string
 * @constructor
 */
export default class TextMarked extends Component {

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
                <span className={"a-textMarked " + classname}>{children}<span className={"a-textMarked--mark"}></span></span>
        );
    }
}