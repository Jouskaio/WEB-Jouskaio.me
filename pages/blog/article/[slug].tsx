import React, {Fragment} from "react";
// @ts-ignore
import Moment from "react-moment";
// @ts-ignore
import ARTICLE_QUERY from "/lib/blog/article/article";
// @ts-ignore
import {useRouter} from "next/router";
import Query, {getStrapiMedia} from "../../../lib/blog/api";
import {client} from "../../../lib/blog/apolloClient";
// @ts-ignore
import {ApolloProvider} from "@apollo/client";
//import parse from "html-react-parser";
//import Image from "next/image";
import {shimmer, toBase64} from "../../../components/protons/preload/preload-image";
// All plugins for ReactMarkdown
import UseProcessor from "../../../components/protons/preload/preload-remark";

const Article = () => {
  const router = useRouter()
  const { slug } = router.query

  /** Configure Remark
   * Source : https://codesandbox.io/s/b7437?file=/index.js:313-544
   *
   */
  return (
    <ApolloProvider client={client}>
      <div>
        <Query query={ARTICLE_QUERY} slug={slug}>
          {({ data: { articles } }) => {
            if (articles.data.length) {
              return (
                <div>
                  <h1>{articles.data[0].attributes.title}</h1>
                  <Moment format="MMM Do YYYY">
                    {articles.data[0].attributes.published_at}
                  </Moment>
                  {/*<Image loader={() => getStrapiMedia(articles.data[0].attributes.image)} src={getStrapiMedia(articles.data[0].attributes.image)} alt={articles.data[0].attributes.image.data.attributes.url} height={10} 04-layout="fill" objectFit="none" placeholder="blur"
                       blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(10, 10))}`} />*/}
                  <div>
                    {/*<ReactMarkdown
                      remarkPlugins={[remarkMath]}
                      escapeHtml={false}>{articles.data[0].attributes.content}</ReactMarkdown>*/}
                    <UseProcessor content={articles.data[0].attributes.content}/>
                  </div>
                </div>
              );
            }
          }}
        </Query>
      </div>
    </ApolloProvider>
  );
};

export default Article;