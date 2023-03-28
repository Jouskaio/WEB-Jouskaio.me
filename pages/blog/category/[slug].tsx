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

const CategorySlug = () => {
    const router = useRouter()
    const { slug } = router.query


    if (!client) {
    return <p>Loading</p>
    }
    return (
    <ApolloProvider client={client}>
        <main className={"l-category__a-sizeSection l-category__a-sizeSection--mainSection"}>
            <NavCategories/>
            <Query query={CATEGORY_ARTICLES_QUERY} value={slug}>
                {({ data: { categories } }) => {
                    if (categories.data.length) {
                        return (
                            <section className={"l-category"}>
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