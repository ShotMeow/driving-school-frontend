import React, { FC } from "react";

import styles from "./GroupItem.module.scss";
import { GroupType } from "@/types/group.types";
import Button from "@/components/UI/Button/Button";
import GroupAvatar from "@/components/other/Icons/GroupAvatar";

interface Props {
  group: GroupType;
}

const GroupItem: FC<Props> = ({ group }) => {
  return (
    <article className={styles.item}>
      <div className={styles.about}>
        <GroupAvatar />
        <div className={styles.info}>
          <h3>Группа №{group.id}</h3>
          <p>
            Категория: <span>{group.category.category}</span>
          </p>
        </div>
      </div>
      <div className={styles.teachers}>
        <div>
          <h4>Учитель теории</h4>
          <p>
            {group.theoryTeacher.surname} {group.theoryTeacher.name[0]}.{" "}
            {group.theoryTeacher.patronymic &&
              group.theoryTeacher.patronymic[0] + "."}
          </p>
        </div>
        <div>
          <h4>Учитель практики</h4>
          <p>
            {group.practiceTeacher.surname} {group.practiceTeacher.name[0]}.{" "}
            {group.practiceTeacher.patronymic &&
              group.practiceTeacher.patronymic[0] + "."}
          </p>
        </div>
      </div>
      <div className={styles.actions}>
        <Button primary>Редактировать</Button>
        <Button secondary>Удалить</Button>
      </div>
    </article>
  );
};

export default GroupItem;
