import React, {useState} from "react";
// @ts-ignore
import Moment from "react-moment";
// @ts-ignore
import ARTICLE_QUERY from "/lib/api/article/article";
// @ts-ignore
import {useRouter} from "next/router";
import Query, {getStrapiMedia} from "../../../lib/api/api";
import {client} from "../../../lib/api/apolloClient";
// @ts-ignore
import {ApolloProvider} from "@apollo/client";
import {shimmer, toBase64} from "../../../lib/preload/preload-image";
import UseProcessor from "../../../lib/preload/preload-rehype";
import NavCategories from "../../../components/molecule/navigation/categories";
import TextH1 from "../../../components/atom/text/textH1";
import TextDefault from "../../../components/atom/text/TextDefault";
import PluginAudio from "../../../lib/motion/pluginAudio";
import {useWindowSize} from "../../../lib/motion/sizeWindow";

const Article = () => {
    const router = useRouter()
    const { slug } = router.query
    const [Content, setContent] = useState();
    const size = useWindowSize();
    /** Configure Remark
    * Source : https://codesandbox.io/s/b7437?file=/index.js:313-544
    *
    */
    return (
        <ApolloProvider client={client}>
            <main>
                <NavCategories/>
                <Query query={ARTICLE_QUERY} value={slug}>
                    {({ data: { articles } }) => {
                        if (articles.data.length) {
                            setContent(articles.data[0].attributes.content)
                            let tags = articles.data[0].attributes.tags.data
                            let categories = articles.data[0].attributes.categories.data
                            return (
                                <main className={"l-article"}>
                                    <div className={"l-article__m-tagsDiv"} data-aos-effect={"fade-up"} data-aos-duration={1000}>
                                        {
                                            tags.map(function (tag, i) {
                                                return <a href={"/api/category/" + tag.attributes.slug} key={i}
                                                          className={"l-article__m-tags l-article__m-tags--marked"}>{tag.attributes.name}</a>
                                            })
                                        }
                                        {
                                            categories.map(function (category, i) {
                                                return <a href={"/api/category/" + category.attributes.slug} key={i}
                                                          className={"l-article__m-tags l-article__m-tags--marked"}>{category.attributes.name}</a>
                                            })
                                        }
                                    </div>
                                    <TextH1 data-aos-effect={"fade-up"} data-aos-duration={1000}
                                            classname={"l-article__a-title"}>{articles.data[0].attributes.title}</TextH1>
                                    <TextDefault data-aos-effect={"fade-up"} data-aos-duration={1000}
                                        classname={"l-article__a-description"}>{articles.data[0].attributes.description}</TextDefault>
                                    <nav className={"l-article__m-meta"} data-aos-effect={"fade-up"} data-aos-duration={1000}>
                                        <PluginAudio classname={"l-article__a-titleDiv--vocal"}
                                                     text={articles.data[0].attributes.title + articles.data[0].attributes.description + Content}
                                                     id={1}/>
                                        <nav className={"l-article__a-datetime"} data-aos-effect={"fade-up"} data-aos-duration={1000}>
                                            <span className={"l-article__a-datetime--span"}>Last update :</span> <Moment
                                            format="LL">{articles.data[0].attributes.published_at}</Moment>
                                        </nav>
                                    </nav>
                                    <nav className={"l-article__m-mainImageDiv"} style={{maxWidth: size.width <= 768 ? size.width - 32 : "unset"}} data-aos-effect={"fade-up"} data-aos-duration={1000}>
                                        <img
                                            src={getStrapiMedia(articles.data[0].attributes.image)}
                                            placeholder="blur"
                                            onLoad={() => `data:image/svg+xml;base64,${toBase64(shimmer("100%", "100%"))}`}
                                            alt={"Main image"}
                                            className={"l-article__m-mainImage"}
                                        />
                                    </nav>
                                    <section className={"l-article__m-content"} data-aos-effect={"fade-up"} data-aos-duration={1000}>
                                        {
                                            <UseProcessor content={Content} size={size}/>
                                        }
                                    </section>
                                </main>
                        );
                        }
                        }}
                </Query>
            </main>
        </ApolloProvider>
    );
};

Article.getInitialProps = async ({htmlProps}) => {
    return {htmlProps: {...htmlProps, className: 'test'}};
};
export default Article;