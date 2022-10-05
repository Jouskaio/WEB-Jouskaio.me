import React from "react";
// @ts-ignore
import Link from 'next/link';

export default function TextSpanXS(props) {
    // ATTRIBUTES
    let content = props.content;
    let classname = props.classname;
    // METHODS
    return (
        <>
            <span className={"a-spanXS " + classname}>{content}</span>
        </>
    );
}