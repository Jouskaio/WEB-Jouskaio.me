import {Component} from "react";
import PropTypes from "prop-types";
import Link from "next/link";

/**
 * Atom: Tag
 *
 * @param props
 * @param classname : string
 * @param color : string
 * @param slug : string
 * @constructor
 */
export default class Tag extends Component {

    static propTypes = {
        classname: PropTypes.string,
        children: PropTypes.any,
        color: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired
    }

    render() {
        const {
            // @ts-ignore
            classname,
            // @ts-ignore
            children,
            // @ts-ignore
            color: color,
            // @ts-ignore
            slug: slug
        } = this.props

        return (
            <Link href={`https://blog.jouskaio.me/${slug}`} style={{ color: color }} legacyBehavior>
                <a className={`a-tag ${classname}`}>{children}</a>
            </Link>

        );
    }
}