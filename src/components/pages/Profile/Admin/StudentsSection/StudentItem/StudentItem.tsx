import React, { FC, useState } from "react";

import styles from "./StudentItem.module.scss";
import Avatar from "@/components/other/Icons/Avatar";
import { UserType } from "@/types/user.types";
import { api } from "@/store/api/api";
import Button from "@/components/UI/Button/Button";
import { AnimatePresence } from "framer-motion";
import StudentDeleteModal from "@/components/pages/Profile/Admin/StudentsSection/StudentDeleteModal/StudentDeleteModal";

interface Props {
  user: UserType;
}

const StudentItem: FC<Props> = ({ user }) => {
  const [modalDeleteShown, setModalDeleteShown] = useState<boolean>(false);
  const { data } = api.useGetGroupByIdQuery(user.id);

  return (
    <article className={styles.item}>
      <div className={styles.about}>
        <Avatar />
        <div className={styles.info}>
          <h3>
            {user.surname} {user.name[0]}.{" "}
            {user.patronymic && user.patronymic[0] + "."}
          </h3>
          {data && (
            <p>
              Категория: <span>{data.category.value}</span>
            </p>
          )}
        </div>
      </div>
      {data && (
        <div className={styles.teachers}>
          <div>
            <h4>Учитель теории</h4>
            <p>
              {data.theoryTeacher.surname} {data.theoryTeacher.name[0]}.{" "}
              {data.theoryTeacher.patronymic &&
                data.theoryTeacher.patronymic[0] + "."}
            </p>
          </div>
          <div>
            <h4>Учитель практики</h4>
            <p>
              {data.practiceTeacher.surname} {data.practiceTeacher.name[0]}.{" "}
              {data.practiceTeacher.patronymic &&
                data.practiceTeacher.patronymic[0] + "."}
            </p>
          </div>
        </div>
      )}
      <div className={styles.actions}>
        <Button primary>Редактировать</Button>
        <Button onClick={() => setModalDeleteShown(true)} secondary>
          Отчислить
        </Button>
      </div>
      {data && (
        <AnimatePresence>
          {modalDeleteShown && (
            <StudentDeleteModal
              modalShown={modalDeleteShown}
              setModalShown={setModalDeleteShown}
              userId={user.id}
              groupId={data.id}
            />
          )}
        </AnimatePresence>
      )}
    </article>
  );
};

export default StudentItem;
