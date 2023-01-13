// @ts-ignore
import gql from "graphql-tag";
// @ts-ignore
import {useQuery} from "@apollo/client";
import React, {useState} from "react";
import TextSpanXXXL from "../../../components/atom/text/textSpanXXXL";
import TextH4 from "../../../components/atom/text/textH4";
import Card from "../../../components/molecule/media/card";

const ARTICLES_QUERY = gql`
    query Articles($start: Int, $offset: Int) {
        articles(sort: "updatedAt:desc", pagination: {start: $start, limit: $offset}) {
            data {
                attributes {
                    slug
                    title
                    updatedAt
                    language
                    description
                    number
                    location
                    categories {
                        data {
                            attributes {
                                slug
                                name
                                color
                            }
                        }
                    }
                    tags {
                        data {
                            attributes {
                                name
                                slug
                                color
                            }
                        }
                    }
                    image {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
            }
        }
    }
`;
export default ARTICLES_QUERY;

export function ArticlesQuery ({ children=null, start = null, offset = null }) {
    const { loading, error, data } = useQuery(ARTICLES_QUERY, {
        variables: { start, offset },
    });

    if (loading) return null;
    if (error) return `Error! ${error}`;
    return children({data})
}

export function ArticlesQueryWithPagination() {
    const [start, setStart] = useState(1);
    const offset = 3;

    const { loading, error, data } = useQuery(ARTICLES_QUERY, {
        variables: { start, offset },
    });

    if (loading) return null;
    if (error) return `Error! ${error}`;
    const loadNext = () => setStart((prev) => prev + offset);
    const loadPrev = () => setStart((prev) => (start > 3 ? prev - offset : start));
    return (
        <div className={"l-blog__o-nextArticles"}>
            <nav className={"l-blog__a-title"}><TextSpanXXXL><span
                className={"l-blog__a-title--span"}>Blog</span></TextSpanXXXL></nav>
            <div className={"l-blog__m-divNextArticles"}>
                <div className={"l-blog__m-nextHeader"}>
                    <TextH4><span
                        className={"l-blog__a-nextTitle"}>Latest</span> articles</TextH4>
                    <nav>
                        <button className={"l-blog__a-nextButton l-blog__a-nextButton--before"} onClick={loadPrev}>&lt;</button>
                        <button className={"l-blog__a-nextButton l-blog__a-nextButton--next"} onClick={loadNext}>&gt;</button>
                    </nav>
                </div>
                {
                    data.articles.data.map((article) => {
                        return (
                            <Card
                                article={article}
                                key={`article__${article.attributes.slug}`}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}
