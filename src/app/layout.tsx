'use client';
import React from 'react';

import { ApolloProvider } from '@apollo/client';

import '@/styles/global.css';

import ErrorBoundary from '@/components/error';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import StyledComponentsRegistry from '@/lib/registry';
import { createApolloClient } from '@/utils/apollo-client';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head title='Dog Spa'></head>
      <body>
        <ErrorBoundary>
          <ApolloProvider client={createApolloClient()}>
            <StyledComponentsRegistry>
              <Navbar />
              <main>{children}</main>
              <div id='modal-root'></div>
              <Footer />
            </StyledComponentsRegistry>
          </ApolloProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
