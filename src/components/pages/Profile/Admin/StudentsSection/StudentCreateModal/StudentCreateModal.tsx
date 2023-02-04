import React, { FC } from "react";
import ModalWrapper from "@/components/other/ModalWrapper/ModalWrapper";
import ExitThin from "@/components/other/Icons/ExitThin";

import styles from "./StudentCreateModal.module.scss";
import { api } from "@/store/api/api";
import StudentCreateItem from "@/components/pages/Profile/Admin/StudentsSection/StudentCreateModal/StudentCreateItem/StudentCreateItem";
interface Props {
  modalShown: boolean;
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const StudentCreateModal: FC<Props> = ({ modalShown, setModalShown }) => {
  const users = api.useGetStudentsWithoutGroupQuery().data;
  const groups = api.useGetAllGroupsQuery({}).data;

  return (
    <ModalWrapper
      className={styles.modal}
      isShow={modalShown}
      setIsShow={setModalShown}
    >
      <header>
        <h3>Добавить ученика {users && `(${users.length})`}</h3>
        <button onClick={() => setModalShown(false)}>
          <ExitThin />
        </button>
      </header>
      <div className={styles.body}>
        {users &&
          groups &&
          users.map((user) => (
            <StudentCreateItem
              key={user.id}
              setModalShown={setModalShown}
              groups={groups}
              user={user}
            />
          ))}
      </div>
    </ModalWrapper>
  );
};

export default StudentCreateModal;
