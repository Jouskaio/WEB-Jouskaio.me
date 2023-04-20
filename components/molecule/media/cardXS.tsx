import React from "react";
import {getStrapiMedia} from "../../../lib/api/api";
import {shimmer, toBase64} from "../../../lib/preload/preload-image";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import Image from "next/image";
import Tag from "../quotes/tag";
import TextMarked from "../../atom/text/textMarked";
import AudioButton from "../../../lib/motion/audioButton";

/**
 *
 * @param article : Send information to this page
 * @param key: int
 * @constructor
 */
const CardXS = ({ article, id }) => {
    // Events

    // Data transformation
    let tags = [];
    let categories = [];
    if (article.attributes.tags.data.length > 0) {
        article.attributes.tags.data.map(function (tag, i) {
            tags.push({
                name: tag.attributes.name,
                color: tag.attributes.color,
                classname: "",
                link: tag.attributes.slug
            });
        });
    }
    if (article.attributes.categories.data.length > 0) {
        article.attributes.categories.data.map(function (tag, i) {
            categories.push({
                name: tag.attributes.name,
                color: tag.attributes.color,
                classname: "",
                link: tag.attributes.slug
            });
        });
    }
    return (
        <>
            <nav className={"m-cardXS__a-markedDiv"}>
                {categories.map(function (element, i) {
                    return (
                        <TextMarked key={i} classname={"m-cardXS__a-markedDiv--mark"}>{element.name}</TextMarked>
                    );
                })}
            </nav>
            <div className={"m-cardXS m-cardXS__m-nextCard"}>
                <Link href={`/blog/article/[slug]`} as={`/blog/article/${article.attributes.slug}`}>
                    <a className={"m-cardXS__a-nextImage--divContainer"}>
                        <div className={"m-cardXS__a-nextImage"} style={{backgroundImage: `url(${getStrapiMedia(article.attributes.image)})`}}>
                        </div>
                        <nav className={"m-cardXS__a-nextImage--div"}></nav>
                    </a>
                </Link>
                <div className={"m-cardXS__a-text"}>
                    <Link href={`/blog/article/[slug]`} as={`/blog/article/${article.attributes.slug}`}>
                        <a>
                            <p className={"m-cardXS__a-text--title"}>{article.attributes.title}</p>
                            <p className={"m-cardXS__a-text--description"}>{article.attributes.description}</p>
                        </a>
                    </Link>
                    <nav className="m-titleWithTag__divTag m-cardXS__m-tagsDiv">
                        <AudioButton
                            text={article.attributes.title + article.attributes.description}
                            classname="m-cardXS__m-mainInformations--vocal"
                            id={id}
                        />                        {tags.map(function (element, i) {
                            return (<Tag key={i} content={element.name} color={element.color} classname={element.classname}/>);
                        })}
                    </nav>
                </div>
            </div>
        </>
  );
};

export default CardXS;