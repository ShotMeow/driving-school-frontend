import React, { FC } from "react";
import ModalWrapper from "@/components/other/ModalWrapper/ModalWrapper";
import ExitThin from "@/components/other/Icons/ExitThin";

import styles from "./StudentCreateModal.module.scss";
import StudentCreateItem from "@/components/pages/Profile/Admin/StudentsSection/StudentCreateModal/StudentCreateItem/StudentCreateItem";
import { usersApi } from "@/store/api/users/users.api";
import { groupsApi } from "@/store/api/groups/groups.api";
import { UserRole } from "@/store/api/users/users.types";
interface Props {
  modalShown: boolean;
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const StudentCreateModal: FC<Props> = ({ modalShown, setModalShown }) => {
  const users = usersApi.useGetUsersQuery({
    role: UserRole.STUDENT,
    withGroup: false
  }).data;
  const groups = groupsApi.useGetGroupsQuery({}).data;

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
