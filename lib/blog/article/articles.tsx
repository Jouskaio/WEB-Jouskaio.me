// @ts-ignore
import gql from "graphql-tag";
// @ts-ignore
import {useQuery} from "@apollo/client";
import {useCallback} from "react";

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

export function ArticlesQuery ({ children=null, query=null, start = null, offset = null }) {
    const { loading, error, data } = useQuery(ARTICLES_QUERY, {
        variables: { start, offset },
    });

    if (loading) return null;
    if (error) return `Error! ${error}`;
    return children({data})
}
