import React, { FC, useState } from "react";

import styles from "./InstructorCreateItem.module.scss";
import Avatar from "@/components/other/Icons/Avatar";
import Button from "@/components/UI/Button/Button";
import Radio from "@/components/UI/Radio/Radio";
import { usersApi } from "@/store/api/users/users.api";
import { UserRole, UserType } from "@/store/api/users/users.types";

interface Props {
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserType;
}

const InstructorCreateItem: FC<Props> = ({ setModalShown, user }) => {
  const [role, setRole] = useState<string>("");
  const [changeUserRole] = usersApi.useChangeUserRoleMutation();

  const handleSubmit = () => {
    console.log(role);
    role &&
      changeUserRole({
        userId: user.id,
        body: {
          role: role
        }
      }).then(() => setModalShown(false));
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
          title="Учитель теории"
          name={String(user.id)}
          value={UserRole.THEORY_TEACHER}
          onChange={(event) => setRole(event.target.value)}
        />
        <Radio
          title="Учитель практики"
          name={String(user.id)}
          value={UserRole.PRACTICE_TEACHER}
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
