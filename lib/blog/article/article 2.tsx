// @ts-ignore
import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
    query Article($value: String!) {
        articles(filters: { slug: { eq: $value } }) {
            data {
                attributes {
                    slug
                    title
                    content
                    category {
                        data {
                            attributes {
                                slug
                                name
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

export default ARTICLE_QUERY;