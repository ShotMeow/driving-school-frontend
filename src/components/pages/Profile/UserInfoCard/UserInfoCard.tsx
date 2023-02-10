import React, { FC } from "react";

import styles from "./UserInfoCard.module.scss";
import Avatar from "@/components/other/Icons/Avatar";
import Button from "@/components/UI/Button/Button";
import { useTypedDispatch } from "@/hooks/useTypedDispatch";
import { logout } from "@/store/auth/auth.slice";
import { UserRole } from "@/store/api/users/users.types";

interface Props {
  surname: string;
  name: string;
  role: UserRole;
  patronymic?: string;
  category?: string;
}

const UserInfoCard: FC<Props> = ({
  surname,
  category,
  name,
  role,
  patronymic
}) => {
  const dispatch = useTypedDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <aside className={styles.card}>
      <div className={styles.info}>
        <Avatar />
        <div>
          <h3>
            {surname} {name[0]}. {patronymic && patronymic[0] + "."}
          </h3>
          {role === UserRole.ADMIN && <p>Администратор</p>}
          {role === UserRole.THEORY_TEACHER && <p>Учитель теории</p>}
          {role === UserRole.PRACTICE_TEACHER && <p>Учитель практики</p>}
          {role === UserRole.STUDENT && category && (
            <p>
              Категория <span>{category}</span>
            </p>
          )}
        </div>
      </div>
      <Button onClick={handleLogout} primary>
        Выход
      </Button>
    </aside>
  );
};

export default UserInfoCard;
