import React from "react";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import Image from "next/image";
import {shimmer, toBase64} from "../../protons/preload/preload-image";
import {getStrapiMedia} from "../../../lib/blog/api";

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
function Iframe({src, width, height, classname, id, title}) {
    // METHODS
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

export default Iframe;