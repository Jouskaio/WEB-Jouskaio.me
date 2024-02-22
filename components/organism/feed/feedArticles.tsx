import {getStrapiMedia} from "../../../lib/api/api";
import React, {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {useInView} from "react-intersection-observer";
import InfiniteScroll from "react-infinite-scroll-component";
import TextDefault from "../../atom/text/TextDefault";
import Feed from "./feed";
import ARTICLES_QUERY from "../../../lib/api/article/articles";
import Link from "next/link";

function computePinSize(titleLength, descriptionLength) {
    if (
        (titleLength <= 28 && descriptionLength <= 82) ||
        (titleLength <= 56 && descriptionLength <= 42)
    ) {
        return "small";
    } else if (
        titleLength <= 51 &&
        descriptionLength > 42 &&
        descriptionLength <= 122
    ) {
        return "large";
    } else {
        return "medium";
    }
}

function createPins(articles) {
    return articles.map((article) => {
        const title = article.attributes.title;
        const description = article.attributes.description;
        const tags = Array.isArray(article.attributes.tags.data) && article.attributes.tags.data.length > 0
            ? article.attributes.tags.data.map((tag) => ({
                name: tag.attributes.name,
                color: tag.attributes.color,
                slug: tag.attributes.slug,
            }))
            : [];

        // Ajouter les catégories aux tags si elles existent
        if (Array.isArray(article.attributes.categories.data) && article.attributes.categories.data.length > 0) {
            article.attributes.categories.data.forEach((category) => {
                tags.push({
                    name: category.attributes.name,
                    color: category.attributes.color,
                    slug: category.attributes.slug,
                });
            });
        }
        const size = computePinSize(title.length, description.length);

        return {
            title: title,
            text: description,
            url: `blog/article/${article.attributes.slug}`,
            media: getStrapiMedia(article.attributes.image),
            tags: tags,
            size: size,
        };
    });
}

function FeedArticles() {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 6;
    const [loadingMore, setLoadingMore] = useState(false);

    const { loading, error, data, fetchMore } = useQuery(ARTICLES_QUERY, {
        variables: { start: (page - 1) * limit, limit },
    });

    useEffect(() => {
        if (!loading && data && data.articles && data.articles.data) {
            setArticles((prevArticles) => [...prevArticles, ...data.articles.data]);
            setLoadingMore(false);
        }
    }, [loading, data]);

    const fetchMoreData = () => {
        if (!loadingMore) {
            setLoadingMore(true);
            setPage((prevPage) => prevPage + 1);
        }
    };

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            fetchMoreData();
        }
    }, [inView]);

    return (
        <div>
            <div className={"l-blog__m-categories"}>
                <ul className={'l-blog__m-categoriesUl'}>
                    {Array.isArray(articles) && articles.length > 0 && articles.map((article, index) => {
                        const categories = Array.isArray(article.attributes.categories.data) && article.attributes.categories.data.length > 0
                            ? article.attributes.categories.data.map((category, categoryIndex) => (
                                <li key={category.id}>
                                    <Link href={"/blog/category/"+category.attributes.slug}>{category.attributes.name}</Link>
                                </li>
                            ))
                            : [];

                        // Check if it's the last iteration and add "all" category
                        if (index === articles.length - 1) {
                            categories.push(
                                <li key="all">
                                    <Link href="/blog/category">all</Link>
                                </li>
                            );
                        }

                        return categories;
                    })}
                </ul>
            </div>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={!loading}
                loader={<TextDefault classname={"l-blog__a-status"}>No more articles</TextDefault>}
            >
                <Feed pins={createPins(articles)} />
            </InfiniteScroll>
        </div>
    );
}

export { FeedArticles };
