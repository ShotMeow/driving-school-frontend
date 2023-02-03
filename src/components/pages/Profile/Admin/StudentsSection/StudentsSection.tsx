import React, { FC, useState } from "react";
import { UserType } from "@/types/user.types";
import StudentItem from "@/components/pages/Profile/Admin/StudentsSection/StudentItem/StudentItem";

import styles from "./StudentsSection.module.scss";
import StudentSearch from "@/components/pages/Profile/Admin/StudentsSection/StudentSearch/StudentSearch";
import Button from "@/components/UI/Button/Button";

const StudentsSection: FC = () => {
  const [students, setStudents] = useState<UserType[]>([]);

  return (
    <section className={styles.section}>
      <StudentSearch setStudents={setStudents} />
      <div>
        <div>
          <h2>Ученики ({students.length})</h2>
          <Button primary>Создать пользователя</Button>
        </div>
        <ul>
          {students.map((user) => (
            <li key={user.id}>
              <StudentItem user={user} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default StudentsSection;
