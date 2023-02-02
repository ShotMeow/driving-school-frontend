import React from "react";
import Layout from "@/../../src/components/other/Layout/Layout";
import { NextPageAuth } from "@/providers/PrivateRouter.types";

const ProfilePage: NextPageAuth = () => {
  return <Layout>Profile</Layout>;
};

ProfilePage.isOnlyUser = true;

export default ProfilePage;
