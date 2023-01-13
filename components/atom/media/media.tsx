import React from "react";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import Image from "next/image";
import {shimmer, toBase64} from "../../protons/preload/preload-image";
import {getStrapiMedia} from "../../../lib/blog/api";

/**
 * Atom: Media
 *
 * @param src : string
 * @param width : number
 * @param height : number
 * @param classname : string
 * @param alt : string
 */
function Media({src, width, height, classname, alt}) {

    // METHODS
    return (
        <>
            <Image className={"a-media "+ classname } src={src} alt={alt} height={height} width={width} objectFit='contain' unoptimized={false}  placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`} loader={() => src}/>
        </>
    );
}

export default Media;