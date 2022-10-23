import React from "react";
// @ts-ignore
import Link from 'next/link';

/**
 *
 * @param props
 * @param classname : string
 * @constructor
 */
export default function TextSpanXXXL(props, classname) {
    // METHODS
    return (
        <>
            <span className={"a-spanXXXL " + classname}>{props.children}</span>
        </>
    );
}