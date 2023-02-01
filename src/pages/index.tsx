import React from "react";
import { NextPage } from "next";
import Layout from "../components/other/Layout/Layout";
import Home from "../components/pages/Home/Home";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default HomePage;
