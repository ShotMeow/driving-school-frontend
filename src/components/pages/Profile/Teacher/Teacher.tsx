import React, { FC } from "react";
import styles from "../Profile.module.scss";
import UserInfoCard from "@/components/pages/Profile/UserInfoCard/UserInfoCard";
import ScheduleCard from "@/components/pages/Profile/Teacher/ScheduleCard/ScheduleCard";
import { UserType } from "@/store/api/users/users.types";
import { groupsApi } from "@/store/api/groups/groups.api";
import { schedulesApi } from "@/store/api/schedules/schedules.api";
import TeacherScheduleItem from "@/components/pages/Profile/Teacher/TeacherScheduleItem/TeacherScheduleItem";

interface Props {
  user: UserType;
}

const Teacher: FC<Props> = ({ user }) => {
  const groups = groupsApi.useGetGroupsQuery({ search: user.email }).data;
  const schedules = schedulesApi.useGetSchedulesQuery({
    teacherId: user.id
  }).data;
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <UserInfoCard
          surname={user.surname}
          name={user.name}
          patronymic={user.patronymic}
          role={user.role}
        />
        {groups && schedules && (
          <ScheduleCard
            teacherType={user.role}
            schedules={schedules}
            groups={groups}
          />
        )}
      </div>
      <div className={styles.body}>
        <ul>
          {schedules &&
            schedules.map((schedule) => (
              <li key={schedule.id}>
                <TeacherScheduleItem schedule={schedule} />
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
};

export default Teacher;
