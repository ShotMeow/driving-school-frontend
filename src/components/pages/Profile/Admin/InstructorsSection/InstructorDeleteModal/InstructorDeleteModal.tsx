import React, { FC } from "react";
import ModalWrapper from "@/components/other/ModalWrapper/ModalWrapper";
import Button from "@/components/UI/Button/Button";

import styles from "./InstructorDeleteModal.module.scss";
import { usersApi } from "@/store/api/users/users.api";
import { UserRole } from "@/store/api/users/users.types";

interface Props {
  modalShown: boolean;
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  userId: number;
}

const InstructorDeleteModal: FC<Props> = ({
  modalShown,
  setModalShown,
  userId
}) => {
  const [changeUserRole] = usersApi.useChangeUserRoleMutation();

  const handleSubmit = () => {
    changeUserRole({
      userId: userId,
      body: {
        role: UserRole.STUDENT
      }
    }).then(() => setModalShown(false));
  };

  return (
    <ModalWrapper
      className={styles.modal}
      isShow={modalShown}
      setIsShow={setModalShown}
    >
      <h4>Вы уверены что хотите удалить этого учителя?</h4>
      <div className={styles.actions}>
        <Button onClick={() => handleSubmit()} primary>
          Отчислить
        </Button>
        <Button onClick={() => setModalShown(false)} secondary>
          Отмена
        </Button>
      </div>
    </ModalWrapper>
  );
};

export default InstructorDeleteModal;
