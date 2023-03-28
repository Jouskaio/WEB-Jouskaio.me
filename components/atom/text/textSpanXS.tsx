import {Component} from "react";
// @ts-ignore
import Link from 'next/link';
import PropTypes from "prop-types";

/**
 *
 * @param props
 * @param classname : string
 * @constructor
 */
export default class TextSpanXS extends Component {
    static propTypes = {
        classname: PropTypes.string,
        children: PropTypes.string
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
                <span className={"a-spanXS " + classname}>{children}</span>
            </>
        );
    }
}