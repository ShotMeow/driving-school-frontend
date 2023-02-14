import React, {FC, FormEvent, useState} from "react";
import ExitThin from "@/components/other/Icons/ExitThin";
import ModalWrapper from "@/components/other/ModalWrapper/ModalWrapper";

import styles from "./InstructorChangeModal.module.scss";
import {UserRole, UserType} from "@/store/api/users/users.types";
import Button from "@/components/UI/Button/Button";
import Avatar from "@/components/other/Icons/Avatar";
import Radio from "@/components/UI/Radio/Radio";
import {usersApi} from "@/store/api/users/users.api";

interface Props {
  modalShown: boolean;
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserType;
}

const InstructorChangeModal: FC<Props> = ({
  modalShown,
  setModalShown,
  user
}) => {
  const [role, setRole] = useState<string>("");

  const [changeRole] = usersApi.useChangeUserRoleMutation();

  const handleTeacherChange = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (role !== "") {
      changeRole({
        userId: user.id,
        body: {
          role: role
        }
      }).then(() => setModalShown(false));
    }
  }

  return (
    <ModalWrapper
      className={styles.modal}
      isShow={modalShown}
      setIsShow={setModalShown}
    >
      <header>
        <h3>Группа №{user.id}</h3>
        <button onClick={() => setModalShown(false)}>
          <ExitThin />
        </button>
      </header>
      <div className={styles.body}>
        <div className={styles.info}>
          <Avatar />
          <div>
            <h4>{user.surname} {user.name[0]}.{" "}
              {user.patronymic && user.patronymic[0] + "."}</h4>
            <p>Учитель {user.role === UserRole.THEORY_TEACHER ? 'теории' : 'практики'}</p>
          </div>
        </div>
        <form onSubmit={(event) => handleTeacherChange(event)}>
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
          <Button primary>Применить</Button>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default InstructorChangeModal;
