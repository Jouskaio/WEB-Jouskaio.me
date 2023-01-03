import React from "react";

/**
 *
 * @param props
 * @param classname : string
 * @constructor
 */
export default function TextH5(props, classname) {
    // METHODS
    return (
        <>
            <h5 className={"a-titleH5 " + classname}>{props.children}</h5>
        </>
    );
}