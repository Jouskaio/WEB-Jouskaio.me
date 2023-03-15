import React from "react";
import {getStrapiMedia} from "../../../lib/blog/api";
import {shimmer, toBase64} from "../../protons/preload/preload-image";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import Image from "next/image";
import Tag from "../quotes/Tag";

/**
 *
 * @param article : Send information to this page
 * @constructor
 */
const CardS = ({ article }) => {
    let tags = [];
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
            tags.push({
                name: tag.attributes.name,
                color: tag.attributes.color,
                classname: "",
                link: tag.attributes.slug
            });
        });
    }
    return (
        <div className={"m-cardS"}>
            <div className={"m-cardS__m-imageDiv"}
                 style={{backgroundImage: `url(${getStrapiMedia(article.attributes.image)})`}}>
            </div>
            <Link href={`/blog/article/[slug]`} as={`/blog/article/${article.attributes.slug}`}>
                <a className="m-cardS__m-textDiv">
                    <p className={"m-cardS__m-textDiv--a-title"}>{article.attributes.title}</p>
                    <p className={"m-cardS__m-textDiv--a-description"}>{article.attributes.description}</p>
                    <nav className="m-cardS__m-tagsDiv">
                        {tags.map(function (element, i) {
                            return (<Tag key={i} content={element.name} color={element.color} classname={element.classname}/>);
                        })}
                    </nav>
                </a>
            </Link>
        </div>
    );
};

export default CardS;