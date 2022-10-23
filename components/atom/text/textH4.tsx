import React from "react";

/**
 *
 * @param props
 * @param classname : string
 * @constructor
 */
export default function TextH4(props, classname) {
    // METHODS
    return (
        <>
            <h4 className={"a-titleH4 " + classname}>{props.children}</h4>
        </>
    );
}