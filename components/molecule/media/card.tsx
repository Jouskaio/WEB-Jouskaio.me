import React from "react";
import {getStrapiMedia} from "../../../lib/blog/api";
import {shimmer, toBase64} from "../../protons/preload/preload-image";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import Image from "next/image";

/**
 *
 * @param article : Send information to this page
 * @constructor
 */
const Card = ({ article }) => {
  return (
    <Link href={`/blog/article/[slug]`} as={`/blog/article/${article.attributes.slug}`} className="uk-link-reset">
      <a>
        <div style={{position: 'relative', width: '300px', height: '300px' }}>
          {/**
           * Source for blurData and placeholder strategy : https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/shimmer.js
           * Source for filling image strategy : https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/layout-fill.js
           * Property :  objectFit="none" allows image to zoom in or zoom out depending on the windows size
           */}
          <Image loader={() => getStrapiMedia(article.attributes.image)} src={getStrapiMedia(article.attributes.image)} alt={article.attributes.image.url} height={300} layout="fill" placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 300))}`}
            style={{objectFit: 'contain'}}/>
        </div>
        <p id="category" className="uk-text-uppercase">
          {article.attributes.categories.data.map(function (categorie, i) {
            return (
                <p key={i}>{categorie.name}</p>
            )
          })}
          <br/>
          {getStrapiMedia(article.attributes.image)}
        </p>
        <p id="title" className="uk-text-large">
          {article.attributes.title}
        </p>
      </a>
    </Link>
  );
};

export default Card;