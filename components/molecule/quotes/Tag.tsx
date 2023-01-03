import Icon from "../../atom/icon/icon";
import React from "react";
import TextSpanM from "../../atom/text/textSpanM";

/**
 * Send information to this page
 * @param props
 *
 * @param color: string
 * @param classname: string
 */
function Tag({content, color, classname}) {
    // METHOD
    return (
        <nav className="m-tag {{class}}">
            <nav className="m-tag__color" style={{backgroundColor: color}}></nav>
            <TextSpanM classname={classname}>{content}</TextSpanM>
        </nav>
    );
}

export default Tag;