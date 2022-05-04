import React, { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import { useRouter } from "next/router";
import { ApolloProvider } from "@apollo/client";
import Layout from "@components/layout/layout";
import { useApollo } from "../apollo/client";
import * as ga from "../lib/ga";

const MyApp = function ({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
};

export function reportWebVitals(metric: NextWebVitalsMetric) {
  ga.event({
    action: metric.name,
    params: {
      event_category:
        metric.label === "web-vital" ? "Web Vitals" : "Custom metric",
      value: Math.round(
        metric.name === "CLS" ? metric.value * 1000 : metric.value
      ),
      event_label: metric.id,
      non_interaction: true,
    },
  });
}

export default MyApp;
