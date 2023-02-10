import React, { FC } from "react";
import ModalWrapper from "@/components/other/ModalWrapper/ModalWrapper";
import Button from "@/components/UI/Button/Button";

import styles from "./GroupDeleteModal.module.scss";
import { groupsApi } from "@/store/api/groups/groups.api";

interface Props {
  modalShown: boolean;
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  groupId: number;
}

const GroupDeleteModal: FC<Props> = ({
  modalShown,
  setModalShown,
  groupId
}) => {
  const [deleteGroup] = groupsApi.useDeleteGroupMutation();

  const handleSubmit = () => {
    deleteGroup({ groupId: groupId }).then(() => setModalShown(false));
  };

  return (
    <ModalWrapper
      className={styles.modal}
      isShow={modalShown}
      setIsShow={setModalShown}
    >
      <h4>Вы уверены что хотите удалить группу?</h4>
      <div className={styles.actions}>
        <Button onClick={() => handleSubmit()} primary>
          Удалить
        </Button>
        <Button onClick={() => setModalShown(false)} secondary>
          Отмена
        </Button>
      </div>
    </ModalWrapper>
  );
};

export default GroupDeleteModal;
