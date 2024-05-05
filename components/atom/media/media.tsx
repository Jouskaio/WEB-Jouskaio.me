import React, {Component} from "react";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import Image from "next/image";
import {shimmer, toBase64} from "../../../lib/preload/preload-image";
import {getStrapiMedia} from "../../../lib/api/api";
import PropTypes from "prop-types";

/**
 * Atom: Media
 *
 * @param src : string
 * @param width : number
 * @param height : number
 * @param classname : string
 * @param alt : string
 */
class Media extends Component{

    static propTypes = {
        src : PropTypes.string,
        classname : PropTypes.string,
        alt : PropTypes.string,
        height: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        width: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        objectFit: PropTypes.string.isRequired

    }

    render() {
        const {
            // @ts-ignore
            classname,
            // @ts-ignore
            src,
            // @ts-ignore
            alt,
            // @ts-ignore
            height,
            // @ts-ignore
            width,
            // @ts-ignore
            objectFit
        } = this.props
        return (
            <>
                <Image src={src} alt={alt} height={height} width={width} objectFit={objectFit} unoptimized={false}  placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`} loader={() => src} className={"a-media "+ classname }/>
            </>
        );
    }
}

export default Media;