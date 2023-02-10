import React, { FC, useState } from "react";
import UserInfoCard from "@/components/pages/Profile/UserInfoCard/UserInfoCard";

import styles from "../Profile.module.scss";
import NavigationCard from "@/components/pages/Profile/Admin/NavigationCard/NavigationCard";
import StudentsSection from "@/components/pages/Profile/Admin/StudentsSection/StudentsSection";
import GroupsSection from "@/components/pages/Profile/Admin/GroupsSection/GroupsSection";
import InstructorsSection from "@/components/pages/Profile/Admin/InstructorsSection/InstructorsSection";
import CategoriesSection from "@/components/pages/Profile/Admin/CategoriesSection/CategoriesSection";
import { UserType } from "@/store/api/users/users.types";

interface Props {
  user: UserType;
}

const Admin: FC<Props> = ({ user }) => {
  const [section, setSection] = useState<1 | 2 | 3 | 4>(1);
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <UserInfoCard
          surname={user.surname}
          name={user.name}
          patronymic={user.patronymic}
          role={user.role}
        />
        <NavigationCard section={section} setSection={setSection} />
      </div>
      <>
        {section === 1 && <StudentsSection />}
        {section === 2 && <GroupsSection />}
        {section === 3 && <InstructorsSection />}
        {section === 4 && <CategoriesSection />}
      </>
    </main>
  );
};

export default Admin;
