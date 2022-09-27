import React from "react";
// @ts-ignore
import Link from "next/link";

function Icon(props: { href: any; content: any; }) {
    // ATTRIBUTES
    let href = props.href
    let content = props.content

    // METHODS
    return (
        <>
            <Link href={href}><a className={"a-icon"}>{content}</a></Link>
        </>

    );
}

export default Icon;