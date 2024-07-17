import type { AppProps } from 'next/app';

import { ApolloProvider } from '@apollo/client';

import '@/styles/global.css';

import ErrorBoundary from '@/components/error';
import StyledComponentsRegistry from '@/lib/registry';
import RootLayout from '@/pages/layout';
import { createApolloClient } from '@/utils/apollo-client';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <ErrorBoundary>
        <ApolloProvider client={createApolloClient()}>
          <StyledComponentsRegistry>
            <Component {...pageProps} />
          </StyledComponentsRegistry>
        </ApolloProvider>
      </ErrorBoundary>
    </RootLayout>
  );
}
