import React from "react";
// @ts-ignore
import Link from 'next/link';

// <Modal post= {postProps} user={userDetails}/>

/**
 * Atom: Button
 * @param props : content, src
 * @param src : string
 * @param classname: string
 */
function Button(props, {src, classname}) {
    // METHODS
    return (
        <Link href={src}><a className={"a-button " + classname}>{props.children}</a></Link>
    );
}

export default Button;