// @ts-ignore
import gql from "graphql-tag";
const LATEST_ARTICLES_QUERY = gql`
    query LatestArticles ($value : Int) {
        articles(sort: "updatedAt:desc", publicationState: LIVE, pagination: {start: 1, limit: $value}) {
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
                }
            }
        }
    }
`;
export default LATEST_ARTICLES_QUERY;