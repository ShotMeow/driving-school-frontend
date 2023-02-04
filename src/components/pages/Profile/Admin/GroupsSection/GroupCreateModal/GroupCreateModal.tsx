import React, { FC, FormEvent, useState } from "react";
import { api } from "@/store/api/api";
import { UserType } from "@/types/user.types";
import ExitThin from "@/components/other/Icons/ExitThin";
import GroupAvatar from "@/components/other/Icons/GroupAvatar";
import Select, { SelectTypes } from "@/components/UI/Select/Select";
import Button from "@/components/UI/Button/Button";
import ModalWrapper from "@/components/other/ModalWrapper/ModalWrapper";
import { CategoryType } from "@/types/category.types";

import styles from "./GroupCreateModal.module.scss";

interface Props {
  modalShown: boolean;
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  theoryTeachers: UserType[];
  practiceTeachers: UserType[];
  categories: CategoryType[];
}

const GroupCreateModal: FC<Props> = ({
  modalShown,
  setModalShown,
  theoryTeachers,
  practiceTeachers,
  categories
}) => {
  const [theoryTeacherId, setTheoryTeacherId] = useState<number>(
    theoryTeachers.length ? theoryTeachers[0].id : 0
  );
  const [practiceTeacherId, setPracticeTeacherId] = useState<number>(
    practiceTeachers.length ? practiceTeachers[0].id : 0
  );
  const [category, setCategory] = useState<string>(
    categories.length ? categories[0].value : ""
  );

  const [createGroup] = api.useCreateGroupMutation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (theoryTeacherId && practiceTeacherId && category) {
      createGroup({
        theory_teacher: theoryTeacherId,
        practice_teacher: practiceTeacherId,
        category: category
      }).then(() => setModalShown(false));
    }
  };

  return (
    <ModalWrapper
      className={styles.modal}
      isShow={modalShown}
      setIsShow={setModalShown}
    >
      <header>
        <h3>Создать группу</h3>
        <button onClick={() => setModalShown(false)}>
          <ExitThin />
        </button>
      </header>
      <div className={styles.body}>
        <div className={styles.group}>
          <GroupAvatar />
          <h4>Новая группа</h4>
        </div>
        {theoryTeachers && practiceTeachers && categories && (
          <form onSubmit={(event) => handleSubmit(event)}>
            <div>
              <Select
                title="Учитель теории"
                onChange={(event) => setTheoryTeacherId(+event.target.value)}
                type={SelectTypes.Users}
                required
                options={theoryTeachers}
              />
              <Select
                title="Учитель практики"
                onChange={(event) => setPracticeTeacherId(+event.target.value)}
                type={SelectTypes.Users}
                required
                options={practiceTeachers}
              />
              <Select
                title="Категория"
                onChange={(event) => setCategory(event.target.value)}
                type={SelectTypes.Categories}
                required
                options={categories}
              />
            </div>
            <Button type="submit" primary>
              Создать группу
            </Button>
          </form>
        )}
      </div>
      <div></div>
    </ModalWrapper>
  );
};

export default GroupCreateModal;
