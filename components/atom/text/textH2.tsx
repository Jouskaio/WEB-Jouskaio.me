import React from "react";

export default function TextH2(props) {
    // ATTRIBUTES
    let content = props.content;
    let classname = props.classname;
    // METHODS
    return (
        <>
            <h2 className={"a-titleH2 " + classname}>{content}</h2>
        </>
    );
}