import React, { FC, useState } from "react";
import { UserType } from "@/types/user.types";
import UserInfoCard from "@/components/pages/Profile/UserInfoCard/UserInfoCard";

import styles from "../Profile.module.scss";
import NavigationCard from "@/components/pages/Profile/Admin/NavigationCard/NavigationCard";
import StudentsSection from "@/components/pages/Profile/Admin/StudentsSection/StudentsSection";
import GroupsSection from "@/components/pages/Profile/Admin/GroupsSection/GroupsSection";
import InstructorsSection from "@/components/pages/Profile/Admin/InstructorsSection/InstructorsSection";

interface Props {
  user: UserType;
}

const Admin: FC<Props> = ({ user }) => {
  const [section, setSection] = useState<1 | 2 | 3>(1);
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <UserInfoCard
          surname={user.surname}
          name={user.name}
          patronymic={user.patronymic}
          type={user.role}
        />
        <NavigationCard section={section} setSection={setSection} />
      </div>
      <>
        {section === 1 && <StudentsSection />}
        {section === 2 && <GroupsSection />}
        {section === 3 && <InstructorsSection />}
      </>
    </main>
  );
};

export default Admin;
