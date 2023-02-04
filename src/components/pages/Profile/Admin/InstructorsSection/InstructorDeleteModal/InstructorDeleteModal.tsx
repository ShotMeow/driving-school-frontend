import React, { FC } from "react";
import ModalWrapper from "@/components/other/ModalWrapper/ModalWrapper";
import Button from "@/components/UI/Button/Button";

import styles from "./InstructorDeleteModal.module.scss";
import { api } from "@/store/api/api";
import { Roles } from "@/types/user.types";

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
  const [changeUserRole] = api.useChangeUserRoleMutation();

  const handleSubmit = () => {
    changeUserRole({ userId: userId, role: Roles.STUDENT }).then(() =>
      setModalShown(false)
    );
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
