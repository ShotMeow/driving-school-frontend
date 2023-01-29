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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Driving School - проект для автошколы, разработанный ShotMeow. Данный проект не является реальным и создан для добавления в портфолио. Проект описывает работу автошколы, работающей в онлайн-режиме." />
        <meta name="author" content="ShotMeow" />
        <meta name="copyright" content="ShotMeow" />
        <title>Driving School</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
