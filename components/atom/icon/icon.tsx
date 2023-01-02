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
function Icon({href, src, classname, alt}) {
    // METHODS
    return (
        <>
            <Link href={href}><a className={"a-icon " + classname}><Image width={"24px"} height={"24px"} className={"a-icon"} src={src} alt={alt}/></a></Link>
        </>

    );
}

export default Icon;