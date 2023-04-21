import React from "react";
import Query, {getStrapiMedia} from "../../../lib/api/api";
import CATEGORY_ARTICLES_QUERY from "../../../lib/api/category/category-articles";
// @ts-ignore
import {ApolloProvider} from "@apollo/client";
// @ts-ignore
import {useRouter} from "next/router";
import {client} from "../../../lib/api/apolloClient";
import NavCategories from "../../../components/molecule/navigation/categories";
import TextDefault from "../../../components/atom/text/TextDefault";
import Media from "../../../components/atom/media/media";
import TextH4 from "../../../components/atom/text/textH4";
import TextSpanXS from "../../../components/atom/text/textSpanXS";
import Moment from "react-moment";
import TextMarked from "../../../components/atom/text/textMarked";

const CategorySlug = () => {
    const router = useRouter()
    const { slug } = router.query

    if (!client) {
        return (
            <section>
                <TextDefault classname={undefined}>Loading</TextDefault>
            </section>
            )
        }
        return (
        <ApolloProvider client={client}>
            <NavCategories/>
            <section className={"l-category"}>
                <Query query={CATEGORY_ARTICLES_QUERY} value={slug}>
                    {({ data: { categories } }) => {
                        return (
                            <>
                                {
                                    categories.data[0].attributes.articles.data.map(function (article, index) {
                                        console.log(article.attributes)
                                        return (
                                            <a className={"l-category__m-divArticle"} key={index} href={"/blog/article/"+ article.attributes.slug}>
                                                <Media width={"300px"} height={"100px"} objectFit={"cover"} src={getStrapiMedia(article.attributes.image)}/>
                                                <nav className={'l-category__m-divArticle--m-metaDiv'}>
                                                    <nav className={"l-category__m-divArticle--m-metaInfoTag "}>
                                                        {
                                                            article.attributes.tags.data.map(function (tag, index) {
                                                                return (
                                                                    <a href={"/blog/category/" + tag.attributes.slug } className={"l-category__m-divArticle--m-metaTag"} key={index}><TextMarked>{tag.attributes.name}</TextMarked></a>
                                                                )
                                                            })
                                                        }
                                                    </nav><TextH4 classname={"l-category__m-divArticle--m-metaTitle"}>{article.attributes.title}</TextH4>
                                                    <TextDefault classname={"l-category__m-divArticle--m-metaDescription"}>{article.attributes.description}</TextDefault>
                                                    <nav className={"l-category__m-divArticle--m-metaInfo"}><TextSpanXS>Last Update : <Moment format={"LL"}>{article.attributes.updatedAt}</Moment></TextSpanXS></nav>
                                                </nav>
                                            </a>
                                        )
                                    })
                                }
                            </>
                        )
                    }}
                </Query>
            </section>
        </ApolloProvider>
        );
};

export default CategorySlug;