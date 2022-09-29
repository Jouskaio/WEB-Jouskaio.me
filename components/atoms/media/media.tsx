import React from "react";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import Image from "next/image";
import {shimmer, toBase64} from "./preload-image";
import {getStrapiMedia} from "../../../lib/blog/api";

function Media(props: { src: string; width: number; height: number; classname: string, alt: string }) {
    // ATTRIBUTES
    let src = props.src
    let width = props.width
    let height = props.height
    let classname = props.classname
    let alt = props.alt

    // METHODS
    return (
        <>
            <Image className={"a-media "+ classname } src={src} alt={alt} height={height} width={width} objectFit='contain' unoptimized={true}  placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`} loader={() => src}/>
        </>
    );
}

export default Media;