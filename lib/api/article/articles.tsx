import gql from "graphql-tag";
import React from "react";

const ARTICLES_QUERY = gql`
    query Articles($start: Int, $limit: Int) {
        articles(sort: "updatedAt:desc", pagination: { start: $start, limit: $limit }) {
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
