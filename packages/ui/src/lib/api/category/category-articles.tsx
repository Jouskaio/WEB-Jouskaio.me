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
                                language
                                description
                                image {
                                    data {
                                        attributes {
                                            url
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
            }
        }
    }
`;

export default CATEGORY_ARTICLES_QUERY;