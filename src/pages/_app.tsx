import React from "react";
import NextProgressBar from "nextjs-progressbar";
import { NextPage } from "next";
import { AppProps } from "next/app";

import "../styles/globals.scss";
import Head from "next/head";
import { Provider } from "react-redux";
import { persistor, store } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import AuthProvider from "@/providers/AuthProvider";
import { TypeComponentAuthField } from "@/providers/PrivateRouter.types";

type TypeAppProps = AppProps & TypeComponentAuthField;

const App: NextPage<TypeAppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <AuthProvider Component={Component}>
            <NextProgressBar
              color="#0075FF"
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
            />
            <Head>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <meta
                name="description"
                content="Driving School - проект для автошколы, разработанный ShotMeow. Данный проект не является реальным и создан для добавления в портфолио. Проект описывает работу автошколы, работающей в онлайн-режиме."
              />
              <meta name="author" content="ShotMeow" />
              <meta name="copyright" content="ShotMeow" />
              <title>Driving School</title>
            </Head>
            <Component {...pageProps} />
          </AuthProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
