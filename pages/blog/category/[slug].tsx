import React from "react";
import Query from "../../../lib/api/api";
import CATEGORY_ARTICLES_QUERY from "../../../lib/api/category/category-articles";
// @ts-ignore
import {ApolloProvider} from "@apollo/client";
// @ts-ignore
import {useRouter} from "next/router";
import {client} from "../../../lib/api/apolloClient";
import Header from "../../../components/organism/navigation/header";
import NavCategories from "../../../components/molecule/navigation/categories";
import TextDefault from "../../../components/atom/text/TextDefault";

const CategorySlug = () => {
    const router = useRouter()
    const { slug } = router.query

    if (!client) {
        return (
            <main>
                <TextDefault classname={undefined}>Loading</TextDefault>
            </main>
            )
        }
        return (
        <ApolloProvider client={client}>
            <main className={"l-category"}>
                <NavCategories/>
                <Query query={CATEGORY_ARTICLES_QUERY} value={slug}>
                    {({ data: { categories } }) => {
                        if (categories.data.length) {
                            return (
                                <section className={""}>
                                    <div className="">
                                        <div className="">
                                            <h1>{categories.data[0].attributes.name}</h1>
                                            {/*<Articles articles={categories.data[0].attributes.articles.data} />*/}
                                        </div>
                                    </div>
                                </section>
                            );
                        }
                    }}
                </Query>
            </main>
        </ApolloProvider>
        );
};

export default CategorySlug;