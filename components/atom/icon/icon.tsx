import React from "react";
// @ts-ignore
import Link from "next/link";

function Icon(props: { href: string, src: string, classname: string, alt: string }) {
    // ATTRIBUTES
    let href = props.href;
    let src = props.src;
    let classname = props.classname;
    let alt = props.alt;

    // METHODS
    return (
        <>
            <Link href={href}><a className={"a-icon"}><img className={"a-icon " + {classname}} src={src} alt={alt}/></a></Link>
        </>

    );
}

export default Icon;