// @ts-ignore
import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
    query Categories {
        categories {
            data {
                attributes {
                    slug
                    name
                    color
                }
            }
        }
    }
`;
export default CATEGORIES_QUERY;