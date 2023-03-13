import React from "react";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import Image from "next/image";

/**
 * Atom: Icon
 * @param href : string
 * @param src : string
 * @param classname : string
 * @param alt : string
 * @constructor
 */
export default function Icon({href, src, classname, alt, id}) {
    // METHODS
    return (
        <>
            <Link id={id}  href={href} legacyBehavior><a className={"a-icon " + classname + " " + id}><Image width={"24px"} height={"24px"} className={"a-icon"} src={src} alt={alt}/></a></Link>
        </>

    );
}