import React from "react";
import { client } from "../../../lib/api/apolloClient";
import TextDefault from "../../../components/atom/text/TextDefault";
import { ApolloProvider } from "@apollo/client";
import NavCategories from "../../../components/molecule/navigation/categories";
import Query, { getStrapiMedia } from "../../../lib/api/api";
import CATEGORY_LATEST_ARTICLES_QUERY from "../../../lib/api/category/category-latest-articles";
import Link from "next/link";
import TextH4 from "../../../components/atom/text/textH4";
import TextSpanM from "../../../components/atom/text/textSpanM";
import TextH1 from "../../../components/atom/text/textH1";
import Media from "../../../components/atom/media/media";
import { useWindowSize } from "../../../lib/motion/sizeWindow";

export default function Category(props) {
    const size = useWindowSize();
    const sizeAOS = size && size.width !== undefined;

    if (!client) {
        return (
            <section>
                <TextDefault classname={undefined}>Loading</TextDefault>
            </section>
        );
    }

    return (
        <ApolloProvider client={client}>
            <section className={"l-category"}>
                <TextH1 classname={"l-blog__a-title"}>Blog</TextH1>
                <NavCategories />
                <Query query={CATEGORY_LATEST_ARTICLES_QUERY} value={1}>
                    {({ data: { categories } }) => {
                        if (categories.data.length > 0) {
                            return (
                                <>
                                    {categories.data.map((category, index) => {
                                        if (category.attributes.articles.data.length > 0) {
                                            return (
                                                <section key={index} className={"l-categoryHome__o-category"}>
                                                    <div className="l-categoryHome__o-category--m-data">
                                                        <div className={"l-categoryHome__o-category--m-categoryDiv"}>
                                                            <TextH1>{category.attributes.name}</TextH1>
                                                            <TextH4 classname={"l-categoryHome__o-category--a-linkCategory"}>
                                                                <Link href={"/blog/category/" + category.attributes.slug}>See all</Link>
                                                            </TextH4>
                                                        </div>
                                                        <div className="l-categoryHome__o-category--m-articleDiv">
                                                            <div className={"l-categoryHome__o-category--m-article"} key={index}>
                                                                <a className={"l-categoryHome__o-category--m-articleLink"} href={"/blog/article/" + category.attributes.articles.data[0].attributes.slug}>
                                                                    <TextH4 classname={"l-categoryHome__o-category--m-articleTitle"}>{category.attributes.articles.data[0].attributes.title}</TextH4>
                                                                    <TextSpanM classname={"l-categoryHome__o-category--m-articleDescription"}>{category.attributes.articles.data[0].attributes.description}</TextSpanM>
                                                                </a>
                                                            </div>
                                                            {sizeAOS && (
                                                                <Media objectFit={size && size.width <= 768 ? "cover" : "contain"} height={"200px"} width={"200px"} src={getStrapiMedia(category.attributes.articles.data[0].attributes.image)} />
                                                            )}
                                                        </div>
                                                    </div>
                                                    {index !== categories.data.length - 1 && <hr className={"l-categoryHome__o-latestArticles--a-separation"} />}
                                                </section>
                                            );
                                        }
                                    })}
                                </>
                            );
                        }
                    }}
                </Query>
            </section>
        </ApolloProvider>
    );
}
