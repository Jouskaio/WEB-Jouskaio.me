// @ts-ignore
import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client';

const httpLink = new HttpLink({ 
  uri: process.env.BLOG_API_URL_URL 
    ? `${process.env.BLOG_API_URL_URL}/graphql` 
    : 'https://blog.jouskaio.me/graphql' // Fallback to real production API if env is missing in Storybook
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: null,
    }
  }));

  return forward(operation);
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
  //connectToDevTools: true
});