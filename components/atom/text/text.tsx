import React from "react";

/**
 * Atom: Text
 *
 * @param props
 * @param classname : string
 * @constructor
 */
export default function Text(props, classname) {
    // METHODS
    return (
        <>
            <p className={"a-text " + classname}>{props.children}</p>
        </>
    );
}