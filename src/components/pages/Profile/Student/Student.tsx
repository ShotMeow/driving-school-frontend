import React, { FC } from "react";
import UserInfoCard from "@/components/pages/Profile/UserInfoCard/UserInfoCard";
import TeachersCard from "@/components/pages/Profile/Student/TeachersCard/TeachersCard";
import ErrorMessage from "@/components/pages/Profile/ErrorMessage/ErrorMessage";

import styles from "../Profile.module.scss";
import { UserType } from "@/store/api/users/users.types";
import StudentScheduleItem from "@/components/pages/Profile/Student/StudentScheduleItem/StudentScheduleItem";

interface Props {
  user: UserType;
}

const Student: FC<Props> = ({ user }) => {
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <UserInfoCard
          surname={user.surname}
          name={user.name}
          patronymic={user.patronymic}
          role={user.role}
          category={user.group && user.group.category.value}
        />
        {user.group && (
          <TeachersCard
            theoryTeacher={user.group.theoryTeacher}
            practiceTeacher={user.group.practiceTeacher}
          />
        )}
      </div>
      {!user.group ? (
        <ErrorMessage />
      ) : (
        <div className={styles.body}>
          <ul>
            {user.group.schedules.map((schedule) => (
              <li key={schedule.id}>
                <StudentScheduleItem schedule={schedule} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default Student;
