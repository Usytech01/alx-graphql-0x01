import React, { Component } from 'react'
import { ApolloProvider } from '@apollo/client/react'
import client from '@/graphql/apolloClient'
import { AppProps } from 'next/app';

export default function Home({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
  return (
    <div>
      <>
        <ApolloProvider client={client}>
              <Component {...pageProps}/>
            </ApolloProvider>
      </>
    </div>
  )
}
