import React from "react";
// @ts-ignore
import Link from 'next/link';

// <Modal post= {postProps} user={userDetails}/>

/**
 * Atom: Button
 * @param props : content, src
 */
function Button(props) {
    // ATTRIBUTES
    let content = props.content
    let src = props.src

    // METHODS
    return (
        <Link href={src}><a className="a-button">{content}</a></Link>
    );
}

export default Button;