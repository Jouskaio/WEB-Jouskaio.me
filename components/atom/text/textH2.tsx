import React from "react";

/**
 * Atom: Title H2
 *
 * @param props
 * @param classname : string
 * @constructor
 */
export default function TextH2(props, classname) {
    // METHODS
    return (
        <>
            <h2 className={"a-titleH2 " + classname}>{props.children}</h2>
        </>
    );
}