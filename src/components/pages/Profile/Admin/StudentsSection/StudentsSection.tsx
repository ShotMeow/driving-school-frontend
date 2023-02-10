import React, { FC, useState } from "react";
import StudentItem from "@/components/pages/Profile/Admin/StudentsSection/StudentItem/StudentItem";

import styles from "./StudentsSection.module.scss";
import StudentSearch from "@/components/pages/Profile/Admin/StudentsSection/StudentSearch/StudentSearch";
import Button from "@/components/UI/Button/Button";
import StudentCreateModal from "@/components/pages/Profile/Admin/StudentsSection/StudentCreateModal/StudentCreateModal";
import { AnimatePresence } from "framer-motion";
import { UserType } from "@/store/api/users/users.types";

const StudentsSection: FC = () => {
  const [students, setStudents] = useState<UserType[]>([]);
  const [modalCreateShown, setModalCreateShown] = useState<boolean>(false);

  return (
    <section className={styles.section}>
      <StudentSearch setStudents={setStudents} />
      <div>
        <div>
          <h2>Ученики ({students.length})</h2>
          <Button onClick={() => setModalCreateShown(true)} primary>
            Добавить ученика
          </Button>
        </div>
        <ul>
          {students.map((user) => (
            <li key={user.id}>
              <StudentItem user={user} />
            </li>
          ))}
        </ul>
      </div>
      <AnimatePresence>
        {modalCreateShown && (
          <StudentCreateModal
            modalShown={modalCreateShown}
            setModalShown={setModalCreateShown}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default StudentsSection;
