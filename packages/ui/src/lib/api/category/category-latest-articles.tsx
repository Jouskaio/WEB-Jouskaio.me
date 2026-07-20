// @ts-ignore
import gql from "graphql-tag";

const CATEGORY_LATEST_ARTICLES_QUERY = gql`
    query Category($value: Int) {
        categories {
            data {
                attributes {
                    slug
                    name
                    color
                    articles (sort: "updatedAt:desc", pagination: {start: 0, limit: $value}){
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
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default CATEGORY_LATEST_ARTICLES_QUERY;