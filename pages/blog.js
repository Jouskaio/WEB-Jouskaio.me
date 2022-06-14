import NavCategories from '/components/blog/Navigation/categories'
import {ApolloProvider} from "@apollo/react-hooks";
import {client} from "/lib/blog/apolloClient";
import React from "react";
import AllArticles from "../components/blog/Article/articles";
import Link from "next/link";
import Articles from "../components/blog/Article/articles";
import Article from "./article/[slug]";

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

