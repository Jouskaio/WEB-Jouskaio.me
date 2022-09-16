import React from "react";
// @ts-ignore
import Link from 'next/link';

// <Modal post= {postProps} user={userDetails}/>

function Button(props) {
    // ATTRIBUTES
    let data = props.data
    let src = props.src

    // METHODS
    return (
        <Link href={src}><a className="a-button">{data}</a></Link>
    );


}

export default Button;