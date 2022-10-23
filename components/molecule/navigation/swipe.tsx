import React from "react";
import TextSpanXS from "../../atom/text/textSpanXS";
import Media from "../../atom/media/media";

/**
 *
 * @param text: {content: string, classname: string}
 * @param media: {src: string, width: number, height: number, classname: string, alt: string}
 * @constructor
 */
function Swipe({text, media}) {
    // METHOD
    return (
        <nav className={"m-swipe"}>
            <TextSpanXS content={text.content} classname={text.classname}/>
            <Media src={media.src} width={media.width} height={media.height} classname={media.classname} alt={media.alt} />
        </nav>
    );
}

export default Swipe;