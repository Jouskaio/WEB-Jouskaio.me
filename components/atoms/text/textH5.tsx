import React from "react";

export default function TextH5(props : {content : string, classname: string}) {
    // ATTRIBUTES
    let content = props.content;
    let classname = props.classname;
    // METHODS
    return (
        <>
            <h5 className={"a-titleH5 " + classname}>{content}</h5>
        </>
    );
}