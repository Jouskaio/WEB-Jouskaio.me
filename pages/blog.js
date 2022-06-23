import NavCategories from '/components/blog/Navigation/categories'
// I don't know why but Apollo works only if with calls it with @apollo/react-hooks even with this module isn't downloaded unlike the other one @apollo/client
import {ApolloProvider} from "@apollo/react-hooks";
import React from "react";
import {client} from "/lib/blog/apolloClient";
import Query from "../lib/blog/api";
import ARTICLES_QUERY from "../lib/blog/article/articles";
import Article from "../components/blog/Article/list-article";

// <AllArticles/>
export default class Blog extends React.Component {

  render() {
    if(!client) {
      return <p>Loading</p>
    }
    return (
      <ApolloProvider client={client}>
          <NavCategories/>
          <Query query={ARTICLES_QUERY}>
            {({data: {articles}}) => {
              return <Article articles={articles.data}/>;
            }}
          </Query>
      </ApolloProvider>
    );
  }
}

