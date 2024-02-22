// @ts-ignore
import gql from "graphql-tag";
import {useQuery} from "@apollo/client";
const LATEST_ARTICLES_QUERY = gql`
    query LatestArticles ($value : Int) {
        articles(sort: "updatedAt:desc", publicationState: LIVE, pagination: {start: 0, limit: $value}) {
            data {
                attributes {
                    slug
                    title
                    language
                    description
                    categories {
                        data {
                            attributes {
                                slug
                                color
                                name
                                updatedAt
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
export default LATEST_ARTICLES_QUERY;