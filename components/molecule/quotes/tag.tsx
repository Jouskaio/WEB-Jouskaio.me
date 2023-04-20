import React from "react";
import TextSpanM from "../../atom/text/textSpanM";

/**
 * Send information to this page
 * @param props
 *
 * @param color: string
 * @param classname: string
 */
function Tag(props) {
    // METHOD
    return (
        <nav className={"m-tag " + props.classname}>
            <nav className="m-tag__color" style={{backgroundColor: props.color}}></nav>
            <TextSpanM classname={props.classname}>{props.content}</TextSpanM>
        </nav>
    );
}

export default Tag;