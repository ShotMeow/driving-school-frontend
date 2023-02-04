import React, { FC } from "react";
import UserInfoCard from "@/components/pages/Profile/UserInfoCard/UserInfoCard";
import TeachersCard from "@/components/pages/Profile/Student/TeachersCard/TeachersCard";
import ErrorMessage from "@/components/pages/Profile/ErrorMessage/ErrorMessage";

import styles from "../Profile.module.scss";
import { api } from "@/store/api/api";
import { UserType } from "@/types/user.types";

interface Props {
  user: UserType;
}

const Student: FC<Props> = ({ user }) => {
  const { data } = api.useGetGroupByAuthQuery();

  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <UserInfoCard
          surname={user.surname}
          name={user.name}
          patronymic={user.patronymic}
          type={user.role}
          category={data && data.category.value}
        />
        {data && (
          <TeachersCard
            theoryTeacher={data.theoryTeacher}
            practiceTeacher={data.practiceTeacher}
          />
        )}
      </div>
      {!data ? <ErrorMessage /> : <></>}
    </main>
  );
};

export default Student;
