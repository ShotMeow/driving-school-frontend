import React from "react";
import { NextPageAuth } from "@/providers/PrivateRouter.types";
import Layout from "@/components/other/Layout/Layout";

const SettingsPage: NextPageAuth = () => {
  return <Layout>Настройки</Layout>;
};

SettingsPage.isOnlyUser = true;

export default SettingsPage;
