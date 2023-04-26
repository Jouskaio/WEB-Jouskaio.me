import React from "react";
import {getStrapiMedia} from "../../../lib/api/api";
import {shimmer, toBase64} from "../../../lib/preload/preload-image";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import Image from "next/image";
import Tag from "../quotes/tag";
import TextH1 from "../../atom/text/textH1";
import TextH5 from "../../atom/text/textH5";
import TextH4 from "../../atom/text/textH4";
import TextSpanM from "../../atom/text/textSpanM";
import Media from "../../atom/media/media";
import TextMarked from "../../atom/text/textMarked";

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
            <nav className={"m-cardS__m-categoriesDiv"}>
                {
                    article.attributes.categories.data.map((category, index) => {
                        return (
                            <a href={"/blog/category/"+category.attributes.slug} key={index}><TextMarked classname={"l-categoryHome__o-latestArticles--m-metaCategory"}>{category.attributes.name}</TextMarked></a>
                        )
                    })
                }
            </nav>
            <a href={"/blog/article/"+article.attributes.slug}>
                <TextH4 classname={"m-cardS__a-title"}>{article.attributes.title}</TextH4>
            </a>
            <a href={"/blog/article/"+article.attributes.slug} style={{textAlign: "justify"}}>
                <TextSpanM classname={"m-cardS__a-description"}>{article.attributes.description}</TextSpanM>
            </a>
        </div>
    );
};

export default CardS;