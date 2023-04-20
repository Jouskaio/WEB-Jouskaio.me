import React, {Component} from "react";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import Image from "next/image";
import {shimmer, toBase64} from "../../../lib/preload/preload-image";
import {getStrapiMedia} from "../../../lib/api/api";
import PropTypes from "prop-types";

/**
 * Atom: iFrame
 *
 * @param src : string
 * @param width : number
 * @param height : number
 * @param classname : string
 * @param id : string (to differentiate each animation)
 * @param title : string
 * @constructor
 */
class Iframe extends Component {
    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        width: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        height: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        src: PropTypes.string,
        classname: PropTypes.string
    }
    render () {
        const {
            // @ts-ignore
            id,
            // @ts-ignore
            title,
            // @ts-ignore
            width,
            // @ts-ignore
            height,
            // @ts-ignore
            src,
            // @ts-ignore
            classname
        } = this.props
        return (
            <>
                <iframe id={id}
                        title={title}
                        width={width}
                        height={height}
                        src={src}
                        allow="autoplay"
                        loading="lazy"
                        className={classname}
                ></iframe>
            </>
        );
    }
}

export default Iframe;