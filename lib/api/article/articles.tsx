// @ts-ignore
import gql from "graphql-tag";
// @ts-ignore
import {useQuery} from "@apollo/client";
import React, {useState} from "react";
import CardXS from "../../../components/molecule/media/cardXS";
import TextDefault from "../../../components/atom/text/TextDefault";
import TextH3 from "../../../components/atom/text/textH3";

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
    if (error) return <TextDefault>Error ! ${error}</TextDefault>;
    const loadNext = () => setStart((prev) => prev + offset);
    const loadPrev = () => setStart((prev) => (start > 3 ? prev - offset : start));
    return (
        <div className={"l-blog__o-nextArticles"}>
                <div className={"l-blog__m-nextHeader"}>
                    <TextH3 classname={"l-blog__a-nextTitle"}><span
                        className={"l-blog__a-nextTitle--span"}>Latest</span> articles</TextH3>
                    <div className={"l-blog__m-buttonDiv"}>
                        <button className={"l-blog__m-buttonDiv--button l-blog__a-nextButton--before"} onClick={loadPrev}>&lt;</button>
                        <button className={"l-blog__m-buttonDiv--button l-blog__a-nextButton--next"} onClick={loadNext}>&gt;</button>
                    </div>
                </div>
                {
                    data.articles.data.map((article, i) => {
                        return (
                            <CardXS
                                article={article}
                                key={i} //id={i}
                            />
                        );
                    })
                }
        </div>
    )
}
