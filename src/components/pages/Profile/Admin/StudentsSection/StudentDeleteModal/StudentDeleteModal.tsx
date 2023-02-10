import React, { FC } from "react";
import ModalWrapper from "@/components/other/ModalWrapper/ModalWrapper";
import Button from "@/components/UI/Button/Button";

import styles from "./StudentDeleteModal.module.scss";
import { groupsApi } from "@/store/api/groups/groups.api";

interface Props {
  modalShown: boolean;
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  userId: number;
  groupId: number;
}

const StudentDeleteModal: FC<Props> = ({
  modalShown,
  setModalShown,
  userId,
  groupId
}) => {
  const [deleteStudentWithGroup] =
    groupsApi.useDeleteStudentFromGroupMutation();

  const handleSubmit = () => {
    deleteStudentWithGroup({ groupId: groupId, userId: userId }).then(() =>
      setModalShown(false)
    );
  };

  return (
    <ModalWrapper
      className={styles.modal}
      isShow={modalShown}
      setIsShow={setModalShown}
    >
      <h4>Вы уверены что хотите отчислить этого ученика?</h4>
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

export default StudentDeleteModal;
