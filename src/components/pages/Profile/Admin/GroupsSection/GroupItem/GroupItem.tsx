import React, { FC, useState } from "react";

import styles from "./GroupItem.module.scss";
import Button from "@/components/UI/Button/Button";
import GroupAvatar from "@/components/other/Icons/GroupAvatar";
import GroupDeleteModal from "@/components/pages/Profile/Admin/GroupsSection/GroupDeleteModal/GroupDeleteModal";
import { AnimatePresence } from "framer-motion";
import { GroupType } from "@/store/api/groups/groups.types";
import GroupChangeModal from "@/components/pages/Profile/Admin/GroupsSection/GroupChangeModal/GroupChangeModal";
import {UserType} from "@/store/api/users/users.types";
import {CategoryType} from "@/store/api/categories/categories.types";

interface Props {
  group: GroupType;
  theoryTeachers: UserType[];
  practiceTeachers: UserType[];
  categories: CategoryType[];
}

const GroupItem: FC<Props> = ({ group, theoryTeachers, practiceTeachers, categories }) => {
  const [modalDeleteShown, setModalDeleteShown] = useState<boolean>(false);
  const [modalChangeShown, setModalChangeShown] = useState<boolean>(false);

  return (
    <article className={styles.item}>
      <div className={styles.about}>
        <GroupAvatar />
        <div className={styles.info}>
          <h3>Группа №{group.id}</h3>
          <p>
            Категория: <span>{group.category.value}</span>
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
        <Button onClick={() => setModalChangeShown(true)} primary>Редактировать</Button>
        <Button onClick={() => setModalDeleteShown(true)} secondary>
          Удалить
        </Button>
      </div>
      <AnimatePresence>
        {modalDeleteShown && (
          <GroupDeleteModal
            groupId={group.id}
            modalShown={modalDeleteShown}
            setModalShown={setModalDeleteShown}
          />
        )}
        {modalChangeShown && (
          <GroupChangeModal
            theoryTeachers={theoryTeachers}
            practiceTeachers={practiceTeachers}
            categories={categories}
            group={group}
            modalShown={modalChangeShown}
            setModalShown={setModalChangeShown}
          />
        )}
      </AnimatePresence>
    </article>
  );
};

export default GroupItem;
