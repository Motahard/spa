import '@/styles/global.css';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { createApolloClient } from '@/utils/apollo-client';

const DynamicRootLayout = dynamic(
  () => import('@/layouts/layout').then((mod) => mod.default),
  {
    ssr: false,
  }
);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DynamicRootLayout>
      <ApolloProvider client={createApolloClient()}>
        <Component {...pageProps} />
      </ApolloProvider>
    </DynamicRootLayout>
  );
}
