import React from "react";

/**
 * Atom: Title H1
 *
 * @param props
 * @param classname : string
 * @constructor
 */
export default function TextH1(props) {
    // METHODS
    return (
        <>
            <h1 className={"a-titleH1 " + props.classname}>{props.children}</h1>
        </>
    );
}