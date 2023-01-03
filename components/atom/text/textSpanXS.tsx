import React from "react";
// @ts-ignore
import Link from 'next/link';

/**
 *
 * @param props
 * @param classname : string
 * @constructor
 */
export default function TextSpanXS(props, classname) {
    // METHODS
    return (
        <>
            <span className={"a-spanXS " + classname}>{props.children}</span>
        </>
    );
}