import React from "react";

export default function Text(props : {content : string, classname: string}) {
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