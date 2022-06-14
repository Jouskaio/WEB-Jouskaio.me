import React from "react";
import Link from "next/link";
import Image from "next/image";
import {getStrapiMedia} from "../../../lib/blog/api";
import {shimmer, toBase64} from "../Preload/preload-image";

const Card = ({ article }) => {

  return (
    <Link href={`/article/${article.attributes.slug}`} className="uk-link-reset">
      <a>
        <div style={{position: 'relative', width: '300px', height: '300px' }}>
          {/**
           * Source for blurData and placeholder strategy : https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/shimmer.js
           * Source for filling image strategy : https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/layout-fill.js
           */}
          <Image loader={() => getStrapiMedia(article.attributes.image)} src={getStrapiMedia(article.attributes.image)} alt={article.attributes.image.url} height={100} layout="fill" objectFit="none" placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 300))}`} />
        </div>
        <p id="category" className="uk-text-uppercase">
          {article.attributes.category.data.attributes.name}
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