import React, { FC } from "react";

import styles from "./ScheduleCard.module.scss";
import Button from "@/components/UI/Button/Button";

const ScheduleCard: FC = () => {
  return (
    <aside className={styles.card}>
      <h4>Расписание занятий</h4>
      <Button primary>Посмотреть занятия</Button>
    </aside>
  );
};

export default ScheduleCard;
