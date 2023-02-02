import React, { FC } from "react";
import UserInfoCard from "@/components/pages/Profile/StudentPage/UserInfoCard/UserInfoCard";
import { UserType } from "@/store/api/api.types";
import styles from "./StudentPage.module.scss";

interface Props {
  user: UserType;
}

const StudentPage: FC<Props> = ({ user }) => {
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <UserInfoCard
          surname={user.surname}
          name={user.name}
          patronymic={user.patronymic}
          role={user.role}
        />
      </div>
    </main>
  );
};

export default StudentPage;
