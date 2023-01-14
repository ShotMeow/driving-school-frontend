import React from "react";
import { NextPage } from "next";
import Layout from "@/components/other/Layout/Layout";
import Contacts from "@/components/pages/Contacts/Contacts";

const ContactsPage: NextPage = () => {
  return (
    <Layout>
      <Contacts />
    </Layout>
  );
};

export default ContactsPage;
