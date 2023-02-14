import React, { FC, useState } from "react";

import styles from "./StudentItem.module.scss";
import Avatar from "@/components/other/Icons/Avatar";
import Button from "@/components/UI/Button/Button";
import { AnimatePresence } from "framer-motion";
import StudentDeleteModal from "@/components/pages/Profile/Admin/StudentsSection/StudentDeleteModal/StudentDeleteModal";
import { UserType } from "@/store/api/users/users.types";

interface Props {
  user: UserType;
  groupId?: number;
}

const StudentItem: FC<Props> = ({ user, groupId }) => {
  const [modalDeleteShown, setModalDeleteShown] = useState<boolean>(false);

  return (
    <article className={styles.item}>
      <div className={styles.about}>
        <Avatar />
        <div className={styles.info}>
          <h3>
            {user.surname} {user.name[0]}.{" "}
            {user.patronymic && user.patronymic[0] + "."}
          </h3>
          {user.group && (
            <p>
              Категория: <span>{user.group.category.value}</span>
            </p>
          )}
        </div>
      </div>
      {user.group && (
        <div className={styles.teachers}>
          <div>
            <h4>Учитель теории</h4>
            <p>
              {user.group.theoryTeacher.surname}{" "}
              {user.group.theoryTeacher.name[0]}.{" "}
              {user.group.theoryTeacher.patronymic &&
                user.group.theoryTeacher.patronymic[0] + "."}
            </p>
          </div>
          <div>
            <h4>Учитель практики</h4>
            <p>
              {user.group.practiceTeacher.surname}{" "}
              {user.group.practiceTeacher.name[0]}.{" "}
              {user.group.practiceTeacher.patronymic &&
                user.group.practiceTeacher.patronymic[0] + "."}
            </p>
          </div>
        </div>
      )}
      <Button onClick={() => setModalDeleteShown(true)} secondary>
        Отчислить
      </Button>
      <AnimatePresence>
        {modalDeleteShown && (
          <StudentDeleteModal
            modalShown={modalDeleteShown}
            setModalShown={setModalDeleteShown}
            userId={user.id}
            groupId={groupId ? groupId : user.group.id}
          />
        )}
      </AnimatePresence>
    </article>
  );
};

export default StudentItem;
