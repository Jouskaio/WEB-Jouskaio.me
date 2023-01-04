import React from "react";
import {getStrapiMedia} from "../../../lib/blog/api";
import {shimmer, toBase64} from "../../protons/preload/preload-image";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import Image from "next/image";
import TitleWithTags from "../quotes/title-with-tags";

/**
 *
 * @param article : Send information to this page
 * @constructor
 */
const Card = ({ article }) => {
  return (
      <div className={"m-card"}>
        <div style={{position: 'relative', width: '145px', height: '100px' }}>
          {/**
           * Source for blurData and placeholder strategy : https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/shimmer.js
           * Source for filling image strategy : https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/layout-fill.js
           * Property :  objectFit="none" allows image to zoom in or zoom out depending on the windows size
           */}
          <Image loader={() => getStrapiMedia(article.attributes.image)} src={getStrapiMedia(article.attributes.image)} alt={article.attributes.image.url} height={100} layout="fill" placeholder="blur"
                 blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(145, 100))}`}
                 style={{objectFit: 'contain'}}/>
        </div>
        <Link href={`/blog/article/[slug]`} as={`/blog/article/${article.attributes.slug}`}>
          <a className="m-card__a-link">
              <p>{article.attributes.title}</p>
              <p>{article.attributes.description}</p>
              {article.attributes.categories.data.map(function (category, i) {
                  let tags = []
                  if (article.attributes.tags.data.length > 0) {
                      article.attributes.tags.data.map(function (tag, i) {
                          tags.push({name : tag.attributes.name, color: tag.attributes.color, classname:"", link: "/blog/category/"+tag.attributes.slug})
                      })
                  }
                  article.attributes.categories.data.map(function (categorie, i) {
                      tags.push({name : categorie.attributes.name, color: categorie.attributes.color, classname:"", link: "/blog/category/"+categorie.attributes.slug})
                  })
                return (
                    <TitleWithTags key={i} itemClassname={"l-blog__a-tags"} titleName={category.title} titleClassname={"m-titleWithTag__title"} libelled={article.attributes.language} tags={tags} linkTitle={"/blog/category/"+category.slug}/>
                )
              })}
          </a>
        </Link>
      </div>

  );
};

export default Card;