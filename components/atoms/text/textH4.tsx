import React from "react";

export default function TextH4(props : {content : string, classname: string}) {
    // ATTRIBUTES
    let content = props.content;
    let classname = props.classname;
    // METHODS
    return (
        <>
            <h4 className={"a-titleH4 " + classname}>{content}</h4>
        </>
    );
}