import React from "react";
import Link from "next/link";
import Image from "next/image";
import {getStrapiMedia} from "../../../lib/blog/api";

const Card = ({ article }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.attributes.image.data.attributes.url
      : process.env.REACT_APP_BACKEND_URL +
      article.attributes.image.data.attributes.url;
  return (
    <Link href={`/article/${article.attributes.slug}`} className="uk-link-reset">
      <a>
        <Image src={getStrapiMedia(article.attributes.image)} alt={article.attributes.image.url} height={100} width="10O%" />
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