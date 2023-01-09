import React from "react";
import NextProgressBar from "nextjs-progressbar";
import { NextPage } from "next";
import { AppProps } from "next/app";

import "../app/globals.scss";
import Head from "next/head";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <NextProgressBar
        color="#0075FF"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Head>
        <title>Driving School</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
