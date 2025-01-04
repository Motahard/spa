import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlError, NextIntlClientProvider } from 'next-intl';

import { ApolloProvider } from '@apollo/client';

import ErrorBoundary from '@/components/error';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyles } from '@/styles/common-layout';
import { createApolloClient } from '@/utils/apollo-client';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  const handleError = (error: IntlError) => {
    console.error(error);
  };

  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <ErrorBoundary>
        <NextIntlClientProvider
          locale={router.locale}
          messages={pageProps.messages}
          onError={handleError}
        >
          <Navbar />
          <ApolloProvider client={createApolloClient()}>
            <Component {...pageProps} />
          </ApolloProvider>
          <Footer />
          <div id='modal-root'></div>
        </NextIntlClientProvider>
      </ErrorBoundary>
    </StyledComponentsRegistry>
  );
};

export default MyApp;
