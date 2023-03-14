import React, {Fragment, useState} from "react";
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
import Header from "../../../components/organisms/navigation/header";
import NavCategories from "../../../components/molecule/navigation/categories";
import Button from "../../../components/atom/button/button";

const Article = () => {
    const router = useRouter()
    const { slug } = router.query
    const [Content, setContent] = useState();

    /** Configure Remark
    * Source : https://codesandbox.io/s/b7437?file=/index.js:313-544
    *
    */
    return (
        <ApolloProvider client={client}>
        <Header/>
        <div className={"l-article__a-sizeSection l-article__o-categories"}><NavCategories/></div>
        <Query query={ARTICLE_QUERY} value={slug}>
            {({ data: { articles } }) => {
                if (articles.data.length) {
                    setContent(articles.data[0].attributes.content)
                    let tags = articles.data[0].attributes.tags.data
                    let categories = articles.data[0].attributes.categories.data
                    return (
                    <main className={"l-article l-article__a-sizeSection"}>
                        <div className={"l-article__m-tagsDiv"}>
                            {
                                tags.map(function (tag, i){
                                    return <Button src={"/blog/category/" + tag.attributes.slug} key={i} classname={"l-article__m-tags"}>{tag.attributes.name}</Button>
                                })
                            }
                            {
                                categories.map(function (category, i){
                                    return <Button src={"/blog/category/" + category.attributes.slug} key={i} classname={"l-article__m-tags"}>{category.attributes.name}</Button>
                                })
                            }

                        </div>
                        <Moment format="LL" className={"l-article__a-datetime"}>
                            {articles.data[0].attributes.published_at}
                        </Moment>
                        <h1>{articles.data[0].attributes.title}</h1>
                        {/*<Image loader={() => getStrapiMedia(articles.data[0].attributes.image)} src={getStrapiMedia(articles.data[0].attributes.image)} alt={articles.data[0].attributes.image.data.attributes.url} height={10} 04-layout="fill" objectFit="none" placeholder="blur"
                           blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(10, 10))}`} />*/}
                        <div>
                        {/*<ReactMarkdown
                          remarkPlugins={[remarkMath]}
                          escapeHtml={false}>{articles.data[0].attributes.content}</ReactMarkdown>
                          <UseProcessor content={articles.data[0].attributes.content}/>
                          */
                            <UseProcessor content={Content}/>
                        }
                        </div>
                    </main>
                    );
                }
            }}
        </Query>
    </ApolloProvider>
    );
};

export default Article;