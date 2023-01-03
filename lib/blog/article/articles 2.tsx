// @ts-ignore
import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
    query Articles {
        articles {
            data {
                attributes {
                    slug
                    title
                    categories {
                        data {
                            attributes {
                                slug
                                name
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