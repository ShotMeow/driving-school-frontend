import React, { FC } from "react";
import ModalWrapper from "@/components/other/ModalWrapper/ModalWrapper";
import styles from "./ScheduleDeleteModal.module.scss";
import Button from "@/components/UI/Button/Button";
import { schedulesApi } from "@/store/api/schedules/schedules.api";
import { ScheduleType } from "@/store/api/schedules/schedules.types";

interface Props {
  modalShown: boolean;
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  schedule: ScheduleType;
}

const ScheduleDeleteModal: FC<Props> = ({
  modalShown,
  setModalShown,
  schedule
}) => {
  const [deleteSchedule] = schedulesApi.useDeleteScheduleMutation();

  const handleSubmit = () => {
    deleteSchedule({
      groupId: schedule.group.id,
      scheduleId: schedule.id
    }).then(() => setModalShown(false));
  };

  return (
    <ModalWrapper
      className={styles.modal}
      isShow={modalShown}
      setIsShow={setModalShown}
    >
      <h4>Вы уверены что хотите удалить занятие?</h4>
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

export default ScheduleDeleteModal;
