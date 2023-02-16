import React, { FC, useState } from "react";

import styles from "./ScheduleItem.module.scss";
import { ScheduleType } from "@/store/api/schedules/schedules.types";
import Avatar from "@/components/other/Icons/Avatar";
import Button from "@/components/UI/Button/Button";
import { getScheduleType } from "@/components/pages/Profile/Teacher/ScheduleItem/ScheduleItem.utils";
import { AnimatePresence } from "framer-motion";
import ScheduleDeleteModal from "@/components/pages/Profile/Teacher/ScheduleItem/ScheduleDeleteModal/ScheduleDeleteModal";

interface Props {
  schedule: ScheduleType;
}

const ScheduleItem: FC<Props> = ({ schedule }) => {
  const [deleteModalShown, setDeleteModalShown] = useState<boolean>(false);
  return (
    <>
      <article className={styles.item}>
        <div className={styles.info}>
          <Avatar />
          <h4>{schedule.date.replaceAll("-", ".")}</h4>
        </div>
        <p className={styles.type}>{getScheduleType(schedule.type)}</p>
        <div className={styles.action}>
          <p>
            с {schedule.startTime} до {schedule.endTime}
          </p>
          <Button onClick={() => setDeleteModalShown(true)} secondary>
            Удалить
          </Button>
        </div>
      </article>
      <AnimatePresence>
        {deleteModalShown && (
          <ScheduleDeleteModal
            modalShown={deleteModalShown}
            setModalShown={setDeleteModalShown}
            schedule={schedule}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ScheduleItem;
