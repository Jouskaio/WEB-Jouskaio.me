import {Component} from "react";
// @ts-ignore
import Link from 'next/link';
import PropTypes from "prop-types";

/**
 *
 * @param props
 * @param classname : string
 * @param src : string
 * @param content: string
 * @constructor
 */
export default class TextLink extends Component{
    static propTypes = {
        src: PropTypes.string.isRequired,
        classname: PropTypes.string,
        children: PropTypes.any
    }
    render() {
        const {
            //@ts-ignore
            src,
            //@ts-ignore
            classname,
            //@ts-ignore
            children
        } = this.props
        return (
            <Link href={src} className={"a-link " + classname}>{children}</Link>
        );
    }
}