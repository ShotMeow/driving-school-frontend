import React from "react";
import { NextPage } from "next";
import { Head, Html, Main, NextScript } from "next/document";

const Document: NextPage = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="overlay"></div>
      </body>
    </Html>
  );
};

export default Document;
