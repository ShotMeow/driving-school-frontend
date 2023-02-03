import React, { FC } from "react";

import Button from "@/components/UI/Button/Button";

import styles from "./InstructorItem.module.scss";
import { Roles, UserType } from "@/types/user.types";
import Avatar from "@/components/other/Icons/Avatar";

interface Props {
  teacher: UserType;
}

const GroupItem: FC<Props> = ({ teacher }) => {
  return (
    <article className={styles.item}>
      <div className={styles.about}>
        <Avatar />
        <h3>
          {teacher.surname} {teacher.name[0]}.{" "}
          {teacher.patronymic && teacher.patronymic[0] + "."}
        </h3>
      </div>
      <p className={styles.role}>
        {teacher.role === Roles.THEORY_TEACHER
          ? "Учитель теории"
          : "Учитель практики"}
      </p>
      <div className={styles.actions}>
        <Button primary>Редактировать</Button>
        <Button secondary>Удалить</Button>
      </div>
    </article>
  );
};

export default GroupItem;
