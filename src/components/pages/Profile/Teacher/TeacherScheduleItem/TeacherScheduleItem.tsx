import React, { FC, useState } from "react";

import { motion } from "framer-motion";
import styles from "./TeacherScheduleItem.module.scss";
import { ScheduleType } from "@/store/api/schedules/schedules.types";
import { AnimatePresence } from "framer-motion";
import classNames from "classnames";
import ListArrow from "@/components/other/Icons/ListArrow";
import Location from "@/components/other/Icons/Location";

interface Props {
  schedule: ScheduleType;
}

const TeacherScheduleItem: FC<Props> = ({ schedule }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <article className={styles.item}>
      <header>
        <div>
          <h3>Группа №{schedule.group.id}</h3>
          <p>
            {schedule.date} - с {schedule.startTime} до {schedule.endTime}
          </p>
        </div>
        {schedule.address && (
          <button
            className={classNames({
              [styles.active]: isShow
            })}
            onClick={() => setIsShow((prev) => !prev)}
          >
            <ListArrow />
          </button>
        )}
      </header>
      <AnimatePresence>
        {isShow && (
          <motion.footer
            initial={{ height: 0, marginTop: 0 }}
            animate={{ height: "auto", marginTop: 20 }}
            exit={{ height: 0, marginTop: 0 }}
            style={{ overflow: "hidden" }}
          >
            {schedule.address && (
              <p className={styles.address}>
                <span>
                  <Location /> Адрес:{" "}
                </span>
                {schedule.address}
              </p>
            )}
          </motion.footer>
        )}
      </AnimatePresence>
    </article>
  );
};

export default TeacherScheduleItem;
