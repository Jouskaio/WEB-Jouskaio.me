import React from "react";
// @ts-ignore
import Link from 'next/link';

/**
 *
 * @param props
 * @param classname : string
 * @constructor
 */
export default function TextSpanM(props, classname) {
    // METHODS
    return (
        <>
            <span className={"a-spanM " + classname}>{props.children}</span>
        </>
    );
}