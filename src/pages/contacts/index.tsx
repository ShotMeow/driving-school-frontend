import React from "react";
import { NextPage } from "next";

import Layout from "@/../../src/components/other/Layout/Layout";
import Contacts from "@/../../src/components/pages/Contacts/Contacts";

import Head from "next/head";

const ContactsPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Driving School - Контакты</title>
      </Head>
      <Contacts />
    </Layout>
  );
};

export default ContactsPage;
