import React from "react";
// @ts-ignore
import Link from 'next/link';

// <Modal post= {postProps} user={userDetails}/>

/**
 * Atom: Button
 * @param props : content, src
 * @param src : string
 */
function Button(props, src) {
    // METHODS
    return (
        <Link href={src}><a className="a-button">{props.children}</a></Link>
    );
}

export default Button;