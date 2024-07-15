import '@/styles/global.css';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { createApolloClient } from '@/utils/apollo-client';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={createApolloClient()}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
