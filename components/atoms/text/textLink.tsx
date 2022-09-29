import React from "react";
// @ts-ignore
import Link from 'next/link';

export default function TextLink(props : {content : string, classname: string, src: string}) {
    // ATTRIBUTES
    let content = props.content;
    let classname = props.classname;
    let src = props.src;
    // METHODS
    return (
        <>
            <Link href={src}><a className={"a-link " + classname} >{content}</a></Link>
        </>
    );
}