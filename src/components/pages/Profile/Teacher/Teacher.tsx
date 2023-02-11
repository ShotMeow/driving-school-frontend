import React, { FC } from "react";
import styles from "../Profile.module.scss";
import UserInfoCard from "@/components/pages/Profile/UserInfoCard/UserInfoCard";
import ScheduleCard from "@/components/pages/Profile/Teacher/ScheduleCard/ScheduleCard";
import { UserType } from "@/store/api/users/users.types";

interface Props {
  user: UserType;
}

const Teacher: FC<Props> = ({ user }) => {
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <UserInfoCard
          surname={user.surname}
          name={user.name}
          patronymic={user.patronymic}
          role={user.role}
        />
        <ScheduleCard />
      </div>
      <></>
    </main>
  );
};

export default Teacher;
