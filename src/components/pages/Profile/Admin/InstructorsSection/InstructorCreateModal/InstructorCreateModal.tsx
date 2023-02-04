import React, { FC } from "react";
import ModalWrapper from "@/components/other/ModalWrapper/ModalWrapper";
import ExitThin from "@/components/other/Icons/ExitThin";

import styles from "./InstructorCreateModal.module.scss";
import InstructorCreateItem from "@/components/pages/Profile/Admin/InstructorsSection/InstructorCreateModal/InstructorCreateItem/InstructorCreateItem";
import { api } from "@/store/api/api";

interface Props {
  modalShown: boolean;
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const InstructorCreateModal: FC<Props> = ({ modalShown, setModalShown }) => {
  const users = api.useGetStudentsWithoutGroupQuery().data;

  return (
    <ModalWrapper
      className={styles.modal}
      isShow={modalShown}
      setIsShow={setModalShown}
    >
      <header>
        <h3>Добавить преподавателя {users && `(${users.length})`}</h3>
        <button onClick={() => setModalShown(false)}>
          <ExitThin />
        </button>
      </header>
      <div className={styles.body}>
        {users &&
          users.map((user) => (
            <InstructorCreateItem
              key={user.id}
              setModalShown={setModalShown}
              user={user}
            />
          ))}
      </div>
    </ModalWrapper>
  );
};

export default InstructorCreateModal;
