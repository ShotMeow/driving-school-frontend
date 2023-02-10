import React from "react";
import Layout from "@/../../src/components/other/Layout/Layout";
import { NextPageAuth } from "@/providers/PrivateRouter.types";
import Head from "next/head";
import { api } from "@/store/api/api";
import Profile from "@/components/pages/Profile/Profile";

const ProfilePage: NextPageAuth = () => {
  const { data } = api.useGetAuthUserQuery();

  return (
    <Layout>
      <Head>
        <title>Driving School - Профиль</title>
      </Head>
      {data && <Profile user={data} />}
    </Layout>
  );
};

ProfilePage.isOnlyUser = true;

export default ProfilePage;
