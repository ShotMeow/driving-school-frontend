import React, { FC, useState } from "react";

import styles from "./InstructorCreateItem.module.scss";
import Avatar from "@/components/other/Icons/Avatar";
import { Roles, UserType } from "@/types/user.types";
import Button from "@/components/UI/Button/Button";
import { api } from "@/store/api/api";
import Radio from "@/components/UI/Radio/Radio";

interface Props {
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserType;
}

const InstructorCreateItem: FC<Props> = ({ setModalShown, user }) => {
  const [role, setRole] = useState<string>(Roles.THEORY_TEACHER);
  const [changeUserRole] = api.useChangeUserRoleMutation();

  const handleSubmit = () => {
    {
      role &&
        changeUserRole({ userId: user.id, role: role }).then(() =>
          setModalShown(false)
        );
    }
  };

  return (
    <article className={styles.item}>
      <div className={styles.about}>
        <Avatar />
        <div className={styles.info}>
          <h3>
            {user.surname} {user.name[0]}.{" "}
            {user.patronymic && user.patronymic[0] + "."}
          </h3>
        </div>
      </div>
      <div className={styles.actions}>
        <Radio
          dark
          title="Учитель теории"
          name={String(user.id)}
          value={Roles.THEORY_TEACHER}
          onChange={(event) => setRole(event.target.value)}
        />
        <Radio
          dark
          title="Учитель практики"
          name={String(user.id)}
          value={Roles.PRACTICE_TEACHER}
          onChange={(event) => setRole(event.target.value)}
        />
      </div>
      <Button onClick={handleSubmit} primary>
        Применить
      </Button>
    </article>
  );
};

export default InstructorCreateItem;
