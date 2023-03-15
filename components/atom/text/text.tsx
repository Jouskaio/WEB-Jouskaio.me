import React from "react";

/**
 * Atom: Text
 *
 * @param props
 * @param classname : string
 * @constructor
 */
export default function Text(props) {
    // METHODS
    return (
        <>
            <p className={"a-text " + props.classname}>{props.children}</p>
        </>
    );
}