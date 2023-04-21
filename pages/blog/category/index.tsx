import React from "react";
import {client} from "../../../lib/api/apolloClient";
import TextDefault from "../../../components/atom/text/TextDefault";
import {ApolloProvider} from "@apollo/client";
import NavCategories from "../../../components/molecule/navigation/categories";
import Query, {getStrapiMedia} from "../../../lib/api/api";
import CATEGORY_LATEST_ARTICLES_QUERY from "../../../lib/api/category/category-latest-articles";
import LATEST_ARTICLES_QUERY from "../../../lib/api/article/latest-articles";
import TextMarked from "../../../components/atom/text/textMarked";
import Moment from "react-moment";
import TextH2 from "../../../components/atom/text/textH2";
import Link from "next/link";
import TextH3 from "../../../components/atom/text/textH3";
import TextH4 from "../../../components/atom/text/textH4";
import TextSpanXS from "../../../components/atom/text/textSpanXS";
import TextSpanM from "../../../components/atom/text/textSpanM";
import TextH1 from "../../../components/atom/text/textH1";
import Media from "../../../components/atom/media/media";
import TextH5 from "../../../components/atom/text/textH5";

export default class Category extends React.Component {
    render() {
        if (!client) {
            return (
                <section>
                    <TextDefault classname={undefined}>Loading</TextDefault>
                </section>
            )
        }
        return (
            <ApolloProvider client={client}>
                <section className={"l-category"}>
                    <NavCategories/>
                    <Query query={LATEST_ARTICLES_QUERY} value={5}>
                        {({ data: { articles } }) => {
                            if (articles.data.length) {
                                let firstArticle = articles.data[0];
                                articles = articles.data.slice(1);
                                return (
                                    <>
                                        <a href={"/blog/article/"+firstArticle.attributes.slug} className={"l-categoryHome__o-mainArticles"}
                                           style={{backgroundImage: "url("+process.env.NEXT_PUBLIC_STRAPI_API_URL+firstArticle.attributes.image.data.attributes.url+")"}}>
                                            <div className={"l-categoryHome__o-mainArticles--m-metaDiv"}>
                                                {firstArticle.attributes.categories.data.map((category, index) => {
                                                    return (
                                                        <a href={"/blog/category/"+category.attributes.slug} key={index} className={"l-categoryHome__o-mainArticles--a-metaLink"}><TextMarked classname={"l-categoryHome__o-mainArticles--m-metaCategory"}>{category.attributes.name}</TextMarked></a>
                                                    )
                                                })}
                                                <nav className={"l-categoryHome__o-mainArticles--a-metaSeparation"}></nav>
                                                <nav className={"l-categoryHome__o-mainArticles--m-metaDate"}>
                                                    <Moment format={"LL"}>
                                                        {firstArticle.attributes.updatedAt}
                                                    </Moment>
                                                </nav>
                                            </div>
                                            <TextH2 classname={"l-categoryHome__o-mainArticles--a-title"}>{firstArticle.attributes.title}</TextH2>
                                            <TextDefault classname={"l-categoryHome__o-mainArticles--a-description"}>{firstArticle.attributes.description}</TextDefault>
                                        </a>
                                        <section className={"l-categoryHome__o-latestArticles"}>
                                            {articles.map((article, index) => {
                                                return (
                                                    <div className={"l-categoryHome__o-latestArticles--m-article"} key={index}>
                                                        <nav className={"l-categoryHome__o-latestArticles--m-categoriesDiv"}>
                                                            {
                                                                article.attributes.categories.data.map((category, index) => {
                                                                    return (
                                                                        <a href={"/blog/category/"+category.attributes.slug} key={index}><TextMarked classname={"l-categoryHome__o-latestArticles--m-metaCategory"}>{category.attributes.name}</TextMarked></a>
                                                                    )
                                                                })
                                                            }
                                                        </nav>
                                                        <a href={"/blog/article/"+firstArticle.attributes.slug}>
                                                            <TextH4 classname={"l-categoryHome__o-latestArticles--a-title"}>{article.attributes.title}</TextH4>
                                                        </a>
                                                        <a href={"/blog/article/"+firstArticle.attributes.slug} style={{textAlign: "justify"}}>
                                                            <TextSpanM classname={"l-categoryHome__o-latestArticles--a-description"}>{article.attributes.description}</TextSpanM>
                                                        </a>
                                                    </div>
                                                )
                                            })}
                                        </section>
                                        <hr className={"l-categoryHome__o-latestArticles--a-separation"}/>
                                    </>
                                );
                            }
                        }}
                    </Query>
                    <Query query={CATEGORY_LATEST_ARTICLES_QUERY} value={1}>
                        {({ data: { categories } }) => {
                            if (categories.data.length > 0) {
                                return (
                                    <>
                                        {
                                            categories.data.map((category, index) => {
                                                if (category.attributes.articles.data.length > 0) {
                                                    console.log(category.attributes.articles.data[0].attributes.title);
                                                    return (
                                                        <section key={index} className={"l-categoryHome__o-category"}>
                                                            <div className="l-categoryHome__o-category--m-data">
                                                                <div className={"l-categoryHome__o-category--m-categoryDiv"}>
                                                                    <TextH1>{category.attributes.name}</TextH1>
                                                                    <TextH5 classname={"l-categoryHome__o-category--a-linkCategory"}><Link href={"/blog/category/"+category.attributes.slug}>See all</Link></TextH5>
                                                                </div>
                                                                <div className="l-categoryHome__o-category--m-articleDiv">
                                                                    <div className={"l-categoryHome__o-category--m-article"} key={index}>
                                                                        <a href={"/blog/article/"+category.attributes.articles.data[0].attributes.slug}>
                                                                            <TextH4 classname={"l-categoryHome__o-category--m-articleTitle"}>{category.attributes.articles.data[0].attributes.title}</TextH4>
                                                                        </a>
                                                                        <a href={"/blog/article/"+category.attributes.articles.data[0].attributes.slug} style={{textAlign: "justify"}}>
                                                                            <TextSpanM classname={"l-categoryHome__o-category--m-articleDescription"}>{category.attributes.articles.data[0].attributes.description}</TextSpanM>
                                                                        </a>
                                                                    </div>
                                                                    <Media height={"200px"} width={"200px"} src={getStrapiMedia(category.attributes.articles.data[0].attributes.image)}/>
                                                                </div>
                                                            </div>
                                                            <hr className={"l-categoryHome__o-latestArticles--a-separation"}/>
                                                        </section>
                                                    )
                                                }
                                            })
                                        }
                                    </>
                                );
                            }
                        }}
                    </Query>
                </section>
            </ApolloProvider>
        );
    }
}