import NavCategories from '/components/blog/Navigation/categories'
import {ApolloProvider} from "@apollo/react-hooks";
import {client} from "/lib/blog/apolloClient";
import React from "react";
import Articles from "../components/blog/Article/call-articles";

// <AllArticles/>
export default class Blog extends React.Component {
  render() {
    if(!client) {
      return <p>Loading</p>
    }
    return (
      <ApolloProvider client={client}>
        <NavCategories/>
        <Articles/>
      </ApolloProvider>
    );
  }
}

