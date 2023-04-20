import React from "react";
import TextH5 from "../../atom/text/textH5";
import TextH3 from "../../atom/text/textH3";

function FlashNews(props) {

    // METHOD
    return (
        <div className="m-flashNews">
            <TextH5 classname={props.classnameTitle}>{props.title}</TextH5>
            <nav className="m-flashNews__divider"></nav>
            <TextH3>{props.children}</TextH3>
        </div>
    );
}

export default FlashNews;