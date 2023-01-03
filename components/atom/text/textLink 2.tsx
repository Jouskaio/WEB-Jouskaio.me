import React from "react";
// @ts-ignore
import Link from 'next/link';

/**
 *
 * @param props
 * @param classname : string
 * @param src : string
 * @constructor
 */
export default function TextLink({classname, src, content}) {
    // METHODS
    return (
        <>
            <Link href={src}><a className={"a-link " + classname}>{content}</a></Link>
        </>
    );
}