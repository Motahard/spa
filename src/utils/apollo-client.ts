import { ApolloClient, InMemoryCache } from '@apollo/client';

export const createApolloClient = () => {
  return new ApolloClient({
    uri: process.env.SERVER_GRAPHQL || 'localhost:3000/api/graphql',
    cache: new InMemoryCache(),
  });
};
