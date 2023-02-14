import React, {FC, FormEvent, useState} from "react";
import ExitThin from "@/components/other/Icons/ExitThin";
import ModalWrapper from "@/components/other/ModalWrapper/ModalWrapper";

import styles from "./GroupChangeModal.module.scss";
import GroupAvatar from "@/components/other/Icons/GroupAvatar";
import {GroupType} from "@/store/api/groups/groups.types";
import Select, {SelectTypes} from "@/components/UI/Select/Select";
import {UserType} from "@/store/api/users/users.types";
import Button from "@/components/UI/Button/Button";
import StudentItem from "@/components/pages/Profile/Admin/StudentsSection/StudentItem/StudentItem";
import {CategoryType} from "@/store/api/categories/categories.types";
import {groupsApi} from "@/store/api/groups/groups.api";

interface Props {
  modalShown: boolean;
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  group: GroupType;
  theoryTeachers: UserType[];
  practiceTeachers: UserType[];
  categories: CategoryType[];
}

const GroupChangeModal: FC<Props> = ({
  modalShown,
  setModalShown,
  group,
  theoryTeachers,
  practiceTeachers,
  categories
}) => {
  const [theoryTeacherId, setTheoryTeacherId] = useState<number>();
  const [practiceTeacherId, setPracticeTeacherId] = useState<number>();
  const [categoryId, setCategoryId] = useState<number>();

  const [changeGroup] = groupsApi.useUpdateGroupMutation();

  const handleGroupChange = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (theoryTeacherId || practiceTeacherId || categoryId) {
      changeGroup({
        groupId: group.id,
        body: {
          theoryTeacherId: theoryTeacherId,
          practiceTeacherId: practiceTeacherId,
          categoryId: categoryId
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
        <h3>Группа №{group.id}</h3>
        <button onClick={() => setModalShown(false)}>
          <ExitThin />
        </button>
      </header>
      <div className={styles.body}>
        <div className={styles.info}>
          <GroupAvatar />
          <div>
            <h4>Группа №{group.id}</h4>
            <p>Категория: <span>{group.category.value}</span></p>
          </div>
        </div>
        <form onSubmit={(event) => handleGroupChange(event)}>
          <div className={styles.selects}>
            <Select title="Учитель теории" onChange={(event) => setTheoryTeacherId(+event.target.value)} type={SelectTypes.Users} options={theoryTeachers}/>
            <Select title="Учитель практики" onChange={(event) => setPracticeTeacherId(+event.target.value)} type={SelectTypes.Users} options={practiceTeachers} />
            <Select title="Категория" onChange={(event) => setCategoryId(+event.target.value)} type={SelectTypes.Categories} options={categories} />
          </div>
          <Button primary>Применить</Button>
        </form>
        <div className={styles.students}>
          <h4>Ученики ({group.students.length})</h4>
          <ul className={styles.list}>
            {group.students.map((student) => <li key={student.id}><StudentItem groupId={group.id} user={student} /></li>)}
          </ul>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default GroupChangeModal;
