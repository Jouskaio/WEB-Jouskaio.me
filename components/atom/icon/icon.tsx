// @ts-ignore
import Link from "next/link";
// @ts-ignore
import Image from "next/image";
import {Component} from "react";
import PropTypes from "prop-types";

/**
 * Atom: Icon
 * @param href : string
 * @param src : string
 * @param classname : string
 * @param alt : string
 * @constructor
 */
class Icon extends Component {
    static propTypes = {
        href: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        classname: PropTypes.string,
        alt: PropTypes.string,
        id: PropTypes.string
    }
    render() {
        const {
            // @ts-ignore
            href,
            // @ts-ignore
            src,
            // @ts-ignore
            classname,
            // @ts-ignore
            alt,
            // @ts-ignore
            id
        } = this.props;
        // METHODS
        return (
            <>
                <Link id={id} href={href} legacyBehavior><a className={"a-icon " + classname + " " + id}><Image
                    width={"24"} height={"24"} className={"a-icon"} src={src} alt={alt}/></a></Link>
            </>

        );
    }
}

export default Icon;