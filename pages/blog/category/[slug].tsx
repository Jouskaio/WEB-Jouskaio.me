import React from "react";
import Query from "../../../lib/blog/api";
import CATEGORY_ARTICLES_QUERY from "../../../lib/blog/category/category-articles";
// @ts-ignore
import {ApolloProvider} from "@apollo/client";
// @ts-ignore
import {useRouter} from "next/router";
import {client} from "../../../lib/blog/apolloClient";

const CategorySlug = () => {
  const router = useRouter()
  const { slug } = router.query


  if (!client) {
    return <p>Loading</p>
  }
  return (
    <ApolloProvider client={client}>
      <Query query={CATEGORY_ARTICLES_QUERY} value={slug}>
        {/*
        {({ data: { categories } }) => {
        if (categories.data.length) {
          return (
            <div>
              <div className="uk-section">
                <div className="uk-container uk-container-large">
                  <h1>{categories.data[0].attributes.name}</h1>
                  <Articles articles={categories.data[0].attributes.articles.data} />
                </div>
              </div>
            </div>
          );
        }
      }}
        */}
    </Query>
    </ApolloProvider>
  );
};

export default CategorySlug;