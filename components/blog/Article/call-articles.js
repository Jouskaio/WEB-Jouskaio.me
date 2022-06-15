import React from "react";
import Article from "./list-article";
import Query from "/lib/blog/api";
import ARTICLES_QUERY from "/lib/blog/article/articles";

const AllArticles = () => {
  return (
    <div>
      <Query query={ARTICLES_QUERY}>
        {({data: {articles}}) => {
          return <Article articles={articles.data}/>;
        }}
      </Query>
    </div>
  );
};

export default AllArticles;