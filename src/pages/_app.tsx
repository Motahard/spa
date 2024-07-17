import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { NextIntlClientProvider } from 'next-intl';

import { ApolloProvider } from '@apollo/client';

import '@/styles/global.css';

import ErrorBoundary from '@/components/error';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import StyledComponentsRegistry from '@/lib/registry';
import { createApolloClient } from '@/utils/apollo-client';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <StyledComponentsRegistry>
      <ErrorBoundary>
        <ApolloProvider client={createApolloClient()}>
          <NextIntlClientProvider
            locale={router.locale}
            messages={pageProps.messages}
          >
            <Navbar />
            <Component {...pageProps} />
            <Footer />
            <div id='modal-root'></div>
          </NextIntlClientProvider>
        </ApolloProvider>
      </ErrorBoundary>
    </StyledComponentsRegistry>
  );
}
