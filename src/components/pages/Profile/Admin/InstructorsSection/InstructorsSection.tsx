import React, { FC, useState } from "react";

import styles from "./InstructorsSection.module.scss";
import InstructorItem from "@/components/pages/Profile/Admin/InstructorsSection/InstructorItem/InstructorItem";
import InstructorsSearch from "@/components/pages/Profile/Admin/InstructorsSection/InstructorsSearch/InstructorsSearch";
import Button from "@/components/UI/Button/Button";
import { AnimatePresence } from "framer-motion";
import InstructorCreateModal from "@/components/pages/Profile/Admin/InstructorsSection/InstructorCreateModal/InstructorCreateModal";
import { UserType } from "@/store/api/users/users.types";

const InstructorsSection: FC = () => {
  const [modalCreateShown, setModalCreateShown] = useState<boolean>(false);
  const [instructors, setInstructors] = useState<UserType[]>([]);

  return (
    <section className={styles.section}>
      <InstructorsSearch setInstructors={setInstructors} />
      <div>
        <div>
          <h2>Преподаватели ({instructors.length})</h2>
          <Button onClick={() => setModalCreateShown(true)} primary>
            Добавить преподавателя
          </Button>
        </div>
        <ul>
          {instructors.map((teacher) => (
            <li key={teacher.id}>
              <InstructorItem teacher={teacher} />
            </li>
          ))}
        </ul>
      </div>
      <AnimatePresence>
        {modalCreateShown && (
          <InstructorCreateModal
            modalShown={modalCreateShown}
            setModalShown={setModalCreateShown}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default InstructorsSection;
