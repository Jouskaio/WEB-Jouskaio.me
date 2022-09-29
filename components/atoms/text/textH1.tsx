import React from "react";

export default function TextH1(props : {content : string, classname: string}) {
    // ATTRIBUTES
    let content = props.content;
    let classname = props.classname;
    // METHODS
    return (
        <>
            <h1 className={"a-titleH1 " + classname}>{content}</h1>
        </>
    );
}