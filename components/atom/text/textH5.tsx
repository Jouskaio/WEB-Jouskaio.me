import React from "react";

/**
 *
 * @param props
 * @constructor
 */
export default function TextH5(props) {
    // METHODS
    return (
        <>
            <h5 className={"a-titleH5 " + props.classname}>{props.children}</h5>
        </>
    );
}