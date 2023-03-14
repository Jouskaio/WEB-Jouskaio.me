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
                    number
                    location
                    tags {
                        data {
                            attributes {
                                slug
                                name
                            }
                        }
                    }
                    categories {
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