import React from "react";
import {getStrapiMedia} from "../../../lib/blog/api";
import {shimmer, toBase64} from "../../protons/preload/preload-image";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import Image from "next/image";
import TitleWithTags from "../quotes/title-with-tags";
import TextLink from "../../atom/text/textLink";
import Tag from "../quotes/Tag";
import TextSpanM from "../../atom/text/textSpanM";

/**
 *
 * @param article : Send information to this page
 * @constructor
 */
const Card = ({ article }) => {
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
        <div className={"m-card l-blog__m-nextCard"}>
          <div className={"l-blog__a-nextImage"}
               style={{backgroundImage: `url(${getStrapiMedia(article.attributes.image)})`}}>
          </div>
          <Link href={`/blog/article/[slug]`} as={`/blog/article/${article.attributes.slug}`}>
              <a className="m-card__a-link">
                  <p className={"m-card__a-link--title"}>{article.attributes.title}</p>
                  <p className={"m-card__a-link--description"}>{article.attributes.description}</p>
                  <nav className="m-titleWithTag__divTag m-card__a-link--divTag">
                      {tags.map(function (element, i) {
                          return (<Tag key={i} content={element.name} color={element.color} classname={element.classname}/>);
                      })}
                  </nav>
              </a>
          </Link>
      </div>
  );
};

export default Card;