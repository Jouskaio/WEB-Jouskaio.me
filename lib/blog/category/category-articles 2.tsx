// @ts-ignore
import gql from "graphql-tag";

const CATEGORY_ARTICLES_QUERY = gql`
    query Category($value: String!) {
        categories(filters: { slug: { eq: $value } }) {
            data {
                attributes {
                    slug
                    name
                    color
                    articles {
                        data {
                            attributes {
                                slug
                                title
                                content
                                category {
                                    data {
                                        attributes {
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
            }
        }
    }
`;

export default CATEGORY_ARTICLES_QUERY;