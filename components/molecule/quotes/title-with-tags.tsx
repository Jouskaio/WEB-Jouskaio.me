import TextSpanM from "../../atom/text/textSpanM";
import Tag from "./tag";
import TextLink from "../../atom/text/textLink";
/**
 *
 * @param itemClassname
 * @param titleName: string
 * @param titleClassname:string,
 * @param libelled: string
 * @param tags : [{name: string, color: string, classname: string}]
 * @param linkTitle
 * @constructor
 */
function TitleWithTags({itemClassname, titleName, titleClassname, libelled, tags, linkTitle}) {
    // METHOD
    return (
        <div className={"m-titleWithTag " + itemClassname}>
            <nav className="m-titleWithTag__divTitle">
                <TextLink src={linkTitle} classname={undefined}>
                    <h4 className={"a-titleH4 " + titleClassname}>{titleName}</h4>
                </TextLink>
                <nav className="m-titleWithTag__divider"></nav>
                <TextSpanM>{libelled}</TextSpanM>
            </nav>
            <nav className="m-titleWithTag__divTag">
                {tags.map(function(tag, i) {
                    return <TextLink classname={"m-titleWithTag__tag"} src={tag.link} key={i}><Tag content={tag.name} color={tag.color} classname={tag.classname}/></TextLink>;
                })}
            </nav>
        </div>
    );
}

export default TitleWithTags;