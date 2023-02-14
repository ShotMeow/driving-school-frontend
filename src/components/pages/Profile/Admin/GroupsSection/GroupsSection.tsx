import React, { FC, useState } from "react";

import styles from "./GroupsSection.module.scss";
import GroupItem from "@/components/pages/Profile/Admin/GroupsSection/GroupItem/GroupItem";
import GroupSearch from "@/components/pages/Profile/Admin/GroupsSection/GroupSearch/GroupSearch";
import Button from "@/components/UI/Button/Button";
import { AnimatePresence } from "framer-motion";
import GroupCreateModal from "@/components/pages/Profile/Admin/GroupsSection/GroupCreateModal/GroupCreateModal";
import { GroupType } from "@/store/api/groups/groups.types";
import { categoriesApi } from "@/store/api/categories/categories.api";
import { UserRole } from "@/store/api/users/users.types";
import { usersApi } from "@/store/api/users/users.api";

const GroupsSection: FC = () => {
  const [groups, setGroups] = useState<GroupType[]>([]);
  const [modalCreateShown, setModalCreateShown] = useState<boolean>(false);

  const theoryTeachers = usersApi.useGetUsersQuery({
    role: UserRole.THEORY_TEACHER
  }).data;

  const practiceTeachers = usersApi.useGetUsersQuery({
    role: UserRole.PRACTICE_TEACHER
  }).data;

  const categories = categoriesApi.useGetCategoriesQuery({}).data;

  return (
    <section className={styles.section}>
      <GroupSearch setGroups={setGroups} />
      <div>
        <div>
          <h2>Группы ({groups.length})</h2>
          <Button onClick={() => setModalCreateShown(true)} primary>
            Создать группу
          </Button>
        </div>
        <ul>
          {theoryTeachers && practiceTeachers && categories && groups.map((group) => (
            <li key={group.id}>
              <GroupItem theoryTeachers={theoryTeachers} practiceTeachers={practiceTeachers} categories={categories} group={group} />
            </li>
          ))}
        </ul>
      </div>
      <AnimatePresence>
        {modalCreateShown &&
          categories &&
          theoryTeachers &&
          practiceTeachers && (
            <GroupCreateModal
              modalShown={modalCreateShown}
              setModalShown={setModalCreateShown}
              categories={categories}
              theoryTeachers={theoryTeachers}
              practiceTeachers={practiceTeachers}
            />
          )}
      </AnimatePresence>
    </section>
  );
};

export default GroupsSection;
