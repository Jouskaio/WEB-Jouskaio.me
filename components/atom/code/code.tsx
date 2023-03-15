import React from "react";
// @ts-ignore
import Link from 'next/link';
// @ts-ignore
import Highlight from "react-highlight"

// <Modal post= {postProps} user={userDetails}/>

/**
 * Atom: Code
 * @param props
 * @param props.classname : string
 * @param props.language : string
 * @param props.children: string
 * @augments
 */
function Code(props) {
    // METHODS
    return (
        <>
            <Highlight className={"a-code " +
                props.classname + " " + props.language}>
                {props.children}
            </Highlight>
        </>

    );
}

export default Code;