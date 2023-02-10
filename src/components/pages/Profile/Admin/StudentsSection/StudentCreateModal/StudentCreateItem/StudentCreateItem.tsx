import React, { FC, useState } from "react";

import styles from "./StudentCreateItem.module.scss";
import Avatar from "@/components/other/Icons/Avatar";
import Button from "@/components/UI/Button/Button";
import Select, { SelectTypes } from "@/components/UI/Select/Select";
import { GroupType } from "@/store/api/groups/groups.types";
import { UserType } from "@/store/api/users/users.types";
import { groupsApi } from "@/store/api/groups/groups.api";

interface Props {
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserType;
  groups: GroupType[];
}

const StudentCreateItem: FC<Props> = ({ setModalShown, groups, user }) => {
  const [selectedGroup, setSelectedGroup] = useState<number>(
    groups.length ? groups[0].id : 0
  );

  const [addStudentToGroup] = groupsApi.usePushStudentToGroupMutation();

  const handleSubmit = () => {
    addStudentToGroup({ groupId: selectedGroup, userId: user.id }).then(() =>
      setModalShown(false)
    );
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
        <Select
          onChange={(event) => setSelectedGroup(+event.target.value)}
          title="Группа"
          type={SelectTypes.Groups}
          options={groups}
        ></Select>
        <Button onClick={handleSubmit} primary>
          Применить
        </Button>
      </div>
    </article>
  );
};

export default StudentCreateItem;
