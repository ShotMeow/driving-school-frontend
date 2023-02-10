import React, { FC, useState } from "react";

import Button from "@/components/UI/Button/Button";

import styles from "./InstructorItem.module.scss";
import Avatar from "@/components/other/Icons/Avatar";
import { AnimatePresence } from "framer-motion";
import InstructorDeleteModal from "@/components/pages/Profile/Admin/InstructorsSection/InstructorDeleteModal/InstructorDeleteModal";
import { UserRole, UserType } from "@/store/api/users/users.types";

interface Props {
  teacher: UserType;
}

const GroupItem: FC<Props> = ({ teacher }) => {
  const [modalDeleteShown, setModalDeleteShown] = useState<boolean>(false);

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
        {teacher.role === UserRole.THEORY_TEACHER
          ? "Учитель теории"
          : "Учитель практики"}
      </p>
      <div className={styles.actions}>
        <Button primary>Редактировать</Button>
        <Button onClick={() => setModalDeleteShown(true)} secondary>
          Удалить
        </Button>
      </div>
      <AnimatePresence>
        {modalDeleteShown && (
          <InstructorDeleteModal
            modalShown={modalDeleteShown}
            setModalShown={setModalDeleteShown}
            userId={teacher.id}
          />
        )}
      </AnimatePresence>
    </article>
  );
};

export default GroupItem;
