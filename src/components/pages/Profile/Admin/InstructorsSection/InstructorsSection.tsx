import React, { FC, useState } from "react";
import { UserType } from "@/types/user.types";

import styles from "./InstructorsSection.module.scss";
import InstructorItem from "@/components/pages/Profile/Admin/InstructorsSection/InstructorItem/InstructorItem";
import InstructorsSearch from "@/components/pages/Profile/Admin/InstructorsSection/InstructorsSearch/InstructorsSearch";
import Button from "@/components/UI/Button/Button";

const InstructorsSection: FC = () => {
  const [instuctors, setInstructors] = useState<UserType[]>([]);

  return (
    <section className={styles.section}>
      <InstructorsSearch setInstructors={setInstructors} />
      <div>
        <div>
          <h2>Преподаватели ({instuctors.length})</h2>
          <Button primary>Добавить преподавателя</Button>
        </div>
        <ul>
          {instuctors.map((teacher) => (
            <li key={teacher.id}>
              <InstructorItem teacher={teacher} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InstructorsSection;
