import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import Layout from "@components/layout/layout";
import { useApollo } from "../apollo/client";

const MyApp = function ({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
};

export default MyApp;
