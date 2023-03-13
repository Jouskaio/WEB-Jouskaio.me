import React from "react";
import TextSpanXS from "../../atom/text/textSpanXS";
import Media from "../../atom/media/media";

/**
 *
 * @param content: string
 * @param src: string
 * @param width
 * @param height
 * @param classname
 * @param alt
 * @constructor
 */
function Swipe({content, src, width, height, classname, alt}) {
    // METHOD
    return (
        <nav className={"m-swipe " + classname}>
            <TextSpanXS classname={""}>Discover</TextSpanXS>
            <Media src={src} unoptimized width={width} height={height} classname={""} alt={alt} />
        </nav>
    );
}

export default Swipe;