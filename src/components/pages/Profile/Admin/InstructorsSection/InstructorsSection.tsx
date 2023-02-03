import React, { FC } from "react";
import { api } from "@/store/api/api";
import { Roles } from "@/types/user.types";

import styles from "./InstructorsSection.module.scss";
import InstructorItem from "@/components/pages/Profile/Admin/InstructorsSection/InstructorItem/InstructorItem";

const InstructorsSection: FC = () => {
  const theory = api.useGetUsersByTypeQuery(Roles.THEORY_TEACHER).data;
  const practice = api.useGetUsersByTypeQuery(Roles.PRACTICE_TEACHER).data;
  return (
    <section className={styles.section}>
      {theory && practice && (
        <ul>
          {theory.concat(practice).map((teacher) => (
            <li key={teacher.id}>
              <InstructorItem teacher={teacher} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default InstructorsSection;
