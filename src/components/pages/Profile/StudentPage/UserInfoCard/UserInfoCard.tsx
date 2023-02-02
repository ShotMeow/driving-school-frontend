import React, { FC, useMemo } from "react";

import styles from "./UserInfoCard.module.scss";
import Avatar from "@/components/other/Icons/Avatar";
import Link from "next/link";
import Button from "@/components/UI/Button/Button";
import { UserRole } from "@/store/api/api.types";
import { logout } from "@/store/auth/auth.actions";
import { useTypedDispatch } from "@/hooks/useTypedDispatch";
import { useRouter } from "next/navigation";

interface Props {
  surname: string;
  name: string;
  patronymic?: string;
  role?: UserRole;
}

const UserInfoCard: FC<Props> = ({ surname, role, name, patronymic }) => {
  const dispatch = useTypedDispatch();
  const router = useRouter();

  const userRole = useMemo(() => {
    if (role === UserRole.student) return "Студент";
    else if (role === UserRole.teacher) return "Учитель";
    else if (role === UserRole.admin) return "Администратор";
  }, [role]);

  const handleLogout = () => {
    dispatch(logout()).then(() => router.push("/"));
  };

  return (
    <aside className={styles.card}>
      <div className={styles.info}>
        <Avatar />
        <div>
          <h3>
            {surname} {name[0]}. {patronymic && patronymic[0] + "."}
          </h3>
          <p>{userRole}</p>
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
