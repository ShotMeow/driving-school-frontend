import React, { FC } from "react";

import styles from "./UserInfoCard.module.scss";
import Avatar from "@/components/other/Icons/Avatar";
import Link from "next/link";
import Button from "@/components/UI/Button/Button";
import { useTypedDispatch } from "@/hooks/useTypedDispatch";
import { logout } from "@/store/auth/auth.slice";
import { Roles } from "@/types/user.types";

interface Props {
  surname: string;
  name: string;
  type: Roles;
  patronymic?: string;
  category?: string;
}

const UserInfoCard: FC<Props> = ({
  surname,
  category,
  name,
  type,
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
          {type === Roles.ADMIN && <p>Администратор</p>}
          {type === Roles.THEORY_TEACHER && <p>Учитель теории</p>}
          {type === Roles.PRACTICE_TEACHER && <p>Учитель практики</p>}
          {type === Roles.STUDENT && category && (
            <p>
              Категория <span>{category}</span>
            </p>
          )}
        </div>
      </div>
      <div className={styles.actions}>
        <Link className={styles.settings} href="/profile/settings">
          Настройки
        </Link>
        <Button onClick={handleLogout} primary>
          Выход
        </Button>
      </div>
    </aside>
  );
};

export default UserInfoCard;
