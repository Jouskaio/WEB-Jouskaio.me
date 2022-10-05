import React from "react";

export default function Text(props) {
    // ATTRIBUTES
    let content = props.content;
    let classname = props.classname;
    // METHODS
    return (
        <>
            <p className={"a-text " + classname}>{content}</p>
        </>
    );
}