// @ts-ignore
import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
    query Articles {
        articles(sort: "updatedAt:desc") {
            data {
                attributes {
                    slug
                    title
                    updatedAt
                    language
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