import React from "react";
// @ts-ignore
import Link from "next/link";

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
            <Link href={href}><a className={"a-icon"}><img className={"a-icon " + {classname}} src={src} alt={alt}/></a></Link>
        </>

    );
}

export default Icon;