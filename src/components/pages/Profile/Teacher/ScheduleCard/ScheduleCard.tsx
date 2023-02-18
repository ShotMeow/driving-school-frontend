import React, { FC, useState } from "react";

import styles from "./ScheduleCard.module.scss";
import Button from "@/components/UI/Button/Button";
import ScheduleModal from "@/components/pages/Profile/Teacher/ScheduleModal/ScheduleModal";
import { AnimatePresence } from "framer-motion";
import { GroupType } from "@/store/api/groups/groups.types";
import { ScheduleType } from "@/store/api/schedules/schedules.types";
import { UserRole } from "@/store/api/users/users.types";

interface Props {
  groups: GroupType[];
  schedules: ScheduleType[];
  teacherType: UserRole;
}

const ScheduleCard: FC<Props> = ({ groups, schedules, teacherType }) => {
  const [modalShown, setModalShown] = useState<boolean>(false);
  return (
    <>
      <aside className={styles.card}>
        <h4>Расписание занятий</h4>
        <Button onClick={() => setModalShown(true)} primary>
          Посмотреть занятия
        </Button>
      </aside>
      <AnimatePresence>
        {modalShown && (
          <ScheduleModal
            groups={groups}
            schedules={schedules}
            isShow={modalShown}
            teacherType={teacherType}
            setIsShow={setModalShown}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ScheduleCard;
