import React, { FC } from "react";

import styles from "./TeachersCard.module.scss";
import { UserType } from "@/store/api/users/users.types";

interface Props {
  theoryTeacher: UserType;
  practiceTeacher: UserType;
}

const TeachersCard: FC<Props> = ({ theoryTeacher, practiceTeacher }) => {
  return (
    <aside className={styles.card}>
      <div>
        <h4>Учитель теории</h4>
        <p>
          {theoryTeacher.surname} {theoryTeacher.name[0]}.{" "}
          {theoryTeacher.patronymic && theoryTeacher.patronymic[0] + "."}
        </p>
        <a href={`tel:+${theoryTeacher.phone.replace(/\D/g, "")}`}>{theoryTeacher.phone}</a>
      </div>
      <div className={styles.line} />
      <div>
        <h4>Учитель практики</h4>
        <p>
          {practiceTeacher.surname} {practiceTeacher.name[0]}.{" "}
          {practiceTeacher.patronymic && practiceTeacher.patronymic[0] + "."}
        </p>
        <a href={`tel:${practiceTeacher.phone}`}>{practiceTeacher.phone}</a>
      </div>
    </aside>
  );
};

export default TeachersCard;
