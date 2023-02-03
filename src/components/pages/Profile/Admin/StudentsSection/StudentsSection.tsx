import React, { FC } from "react";
import { api } from "@/store/api/api";
import { Roles } from "@/types/user.types";
import StudentItem from "@/components/pages/Profile/Admin/StudentsSection/StudentItem/StudentItem";

import styles from "./StudentsSection.module.scss";

const StudentsSection: FC = () => {
  const { data } = api.useGetUsersByTypeQuery(Roles.STUDENT);
  return (
    <section className={styles.section}>
      {data && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              <StudentItem user={user} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default StudentsSection;
