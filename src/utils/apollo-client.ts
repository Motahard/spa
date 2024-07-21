import { ApolloClient, InMemoryCache } from '@apollo/client';

export const createApolloClient = () => {
  console.log(process.env);
  return new ApolloClient({
    uri: process.env.NEXT_PUBLIC_VERCEL_URL ? process.env.NEXT_PUBLIC_VERCEL_URL + '/api' : process.env.NEXT_PUBLIC_SERVER_GRAPHQL || 'localhost:3000/api',
    cache: new InMemoryCache(),
  });
};
