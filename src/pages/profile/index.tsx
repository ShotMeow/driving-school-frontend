import React from "react";
import Layout from "@/../../src/components/other/Layout/Layout";
import { NextPageAuth } from "@/providers/PrivateRouter.types";
import Head from "next/head";
import { api } from "@/store/api/api";
import { UserRole } from "@/store/api/api.types";
import StudentPage from "@/components/pages/Profile/StudentPage/StudentPage";
import TeacherPage from "@/components/pages/Profile/TeacherPage/TeacherPage";
import AdminPage from "@/components/pages/Profile/AdminPage/AdminPage";

const ProfilePage: NextPageAuth = () => {
  const { data } = api.useGetProfileQuery();

  return (
    <Layout>
      <Head>
        <title>Driving School - Профиль</title>
      </Head>
      {data && data.role === UserRole.student && <StudentPage user={data} />}
      {data && data.role === UserRole.teacher && <TeacherPage user={data} />}
      {data && data.role === UserRole.admin && <AdminPage user={data} />}
    </Layout>
  );
};

ProfilePage.isOnlyUser = true;

export default ProfilePage;
