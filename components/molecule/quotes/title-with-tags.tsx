import TextH5 from "../../atom/text/textH5";
import TextH3 from "../../atom/text/textH3";
import React from "react";
import TextSpanM from "../../atom/text/textSpanM";
import Icon from "../../atom/icon/icon";
import Tag from "./Tag";
/**
 *
 * @param title : {title: string, classname:string},
 * @param content : {libelled: string, classname: string}
 * @param tags : [{name: string, color: string, classname: string}]
 * @constructor
 */
function TitleWithTags({title, content, tags}) {
    // METHOD
    return (
        <div className="m-titleWithTag">
            <nav className="m-titleWithTag__divTitle">
                <TextH3 content={title.title} classname={title.classname}/>
                <nav className="m-titleWithTag__divider"></nav>
                <TextSpanM content={content.libelled} classname={content.classname}/>
            </nav>
            <nav className="m-titleWithTag__divTag">
                {tags.map(function(tag, i) {
                    return <Tag content={tag.name} color={tag.color} classname={tag.classname} key={i}/>;
                })}
            </nav>
        </div>
    );
}

export default TitleWithTags;