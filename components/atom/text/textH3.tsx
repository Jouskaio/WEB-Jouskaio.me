import React from "react";

/**
 *
 * @param props
 * @param classname : string
 * @constructor
 */
export default function TextH3(props) {
    // METHODS
    return (
        <>
            <h3 className={"a-titleH3 " + props.classname}>{props.children}</h3>
        </>
    );
}