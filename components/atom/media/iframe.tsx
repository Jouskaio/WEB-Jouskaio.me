import React from "react";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import Image from "next/image";
import {shimmer, toBase64} from "../../protons/preload/preload-image";
import {getStrapiMedia} from "../../../lib/blog/api";

function Iframe(props) {
    // ATTRIBUTES
    let src = props.src
    let width = props.width
    let height = props.height
    let classname = props.classname
    let id = props.id
    let title = props.title

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
                    className={classname}></iframe>
        </>

    );
}

export default Iframe;