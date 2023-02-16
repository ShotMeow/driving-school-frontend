import React, { FC, FormEvent, useState } from "react";
import ExitThin from "@/components/other/Icons/ExitThin";
import GroupAvatar from "@/components/other/Icons/GroupAvatar";
import Select, { SelectTypes } from "@/components/UI/Select/Select";
import Button from "@/components/UI/Button/Button";
import ModalWrapper from "@/components/other/ModalWrapper/ModalWrapper";

import styles from "./GroupCreateModal.module.scss";
import { CategoryType } from "@/store/api/categories/categories.types";
import { UserType } from "@/store/api/users/users.types";
import { groupsApi } from "@/store/api/groups/groups.api";

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
  const [theoryTeacherId, setTheoryTeacherId] = useState<number>(0);
  const [practiceTeacherId, setPracticeTeacherId] = useState<number>(0);
  const [categoryId, setCategoryId] = useState<number>(0);

  const [createGroup] = groupsApi.useCreateGroupMutation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (theoryTeacherId && practiceTeacherId && categoryId) {
      createGroup({
        theoryTeacherId: theoryTeacherId,
        practiceTeacherId: practiceTeacherId,
        categoryId: categoryId
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
                onChange={(event) => setCategoryId(+event.target.value)}
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
