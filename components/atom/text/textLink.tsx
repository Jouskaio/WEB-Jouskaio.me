import React, {useRef} from "react";
// @ts-ignore
import Link from 'next/link';

/**
 *
 * @param props
 * @param classname : string
 * @param src : string
 * @param content: string
 * @constructor
 */
export default function TextLink(props) {
    // METHODS
    return (
        <>
            <Link href={props.src} className={"a-link " + props.classname}>{props.children}</Link>
        </>
    );
}