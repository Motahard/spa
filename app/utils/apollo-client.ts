import { ApolloClient, InMemoryCache } from '@apollo/client';

import { envVariables } from '@/app/constants/environment';

export const createApolloClient = () => {
  return new ApolloClient({
    uri: envVariables.NEXT_PUBLIC_VERCEL_URL
      ? envVariables.NEXT_PUBLIC_VERCEL_URL + '/api'
      : envVariables.NEXT_PUBLIC_SERVER_GRAPHQL || 'localhost:3000/api',
    cache: new InMemoryCache(),
  });
};
