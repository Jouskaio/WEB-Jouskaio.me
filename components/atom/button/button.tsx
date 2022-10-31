import React from "react";
// @ts-ignore
import Link from 'next/link';

// <Modal post= {postProps} user={userDetails}/>

/**
 * Atom: Button
 * @param props : content, src
 * @param src : string
 * @param class: string
 */
function Button(props) {
    // METHODS
    return (
        <Link href={props.src}><a className={"a-button " + props.classname }>{props.children}</a></Link>
    );
}

export default Button;