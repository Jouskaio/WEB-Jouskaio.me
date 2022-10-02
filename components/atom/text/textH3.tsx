import React from "react";

export default function TextH3(props : {content : string, classname: string}) {
    // ATTRIBUTES
    let content = props.content;
    let classname = props.classname;
    // METHODS
    return (
        <>
            <h3 className={"a-titleH3 " + classname}>{content}</h3>
        </>
    );
}