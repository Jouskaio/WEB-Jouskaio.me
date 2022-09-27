import React from "react";
// @ts-ignore
import Link from 'next/link';
// @ts-ignore
import Highlight from "react-highlight"

// <Modal post= {postProps} user={userDetails}/>

/**
 * Atom: Button
 * @param props : content, src
 */
function Code(props) {
    // ATTRIBUTES
    let content = props.content
    let language = props.language

    // METHODS
    return (
        <>
            <Highlight className={"a-code " +
                language}>
                {content}
            </Highlight>
        </>

    );
}

export default Code;