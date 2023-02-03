import React, { FC } from "react";
import { UserType } from "@/types/user.types";
import styles from "../Profile.module.scss";
import UserInfoCard from "@/components/pages/Profile/UserInfoCard/UserInfoCard";
import ScheduleCard from "@/components/pages/Profile/Teacher/ScheduleCard/ScheduleCard";

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
          type={user.role}
        />
        <ScheduleCard />
      </div>
      <></>
    </main>
  );
};

export default Teacher;
