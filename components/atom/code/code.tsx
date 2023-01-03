import React from "react";
// @ts-ignore
import Link from 'next/link';
// @ts-ignore
import Highlight from "react-highlight"

// <Modal post= {postProps} user={userDetails}/>

/**
 * Atom: Code
 * @param props : string
 * @param language: string
 * @param classname: string
 * @augments
 */
function Code(props, {language, classname}) {
    // METHODS
    return (
        <>
            <Highlight className={"a-code " +
                classname + " " + language}>
                {props.children}
            </Highlight>
        </>

    );
}

export default Code;