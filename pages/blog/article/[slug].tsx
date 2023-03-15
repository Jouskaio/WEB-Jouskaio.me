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
import UseProcessor from "../../../components/protons/preload/preload-rehype";
import Header from "../../../components/organisms/navigation/header";
import NavCategories from "../../../components/molecule/navigation/categories";
import Button from "../../../components/atom/button/button";
import TextH1 from "../../../components/atom/text/textH1";
import Text from "../../../components/atom/text/text";

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
                        <nav className={"l-article__a-datetime"}>
                            Last update : <Moment format="LL">{articles.data[0].attributes.published_at}</Moment>
                        </nav>

                        <TextH1 classname={"l-article__a-title"}>{articles.data[0].attributes.title}</TextH1>
                        <Text classname={"l-article__a-description"}>{articles.data[0].attributes.description}</Text>
                        <nav className={"l-article__m-mainImageDiv"}>
                            <img
                                src={getStrapiMedia(articles.data[0].attributes.image)}
                                placeholder="blur"
                                onLoad={() => `data:image/svg+xml;base64,${toBase64(shimmer("100%", "100%"))}`}
                                alt={"Main image"}/>
                        </nav>
                        {
                            <UseProcessor content={Content}/>
                        }
                    </main>
                    );
                }
            }}
        </Query>
    </ApolloProvider>
    );
};

export default Article;