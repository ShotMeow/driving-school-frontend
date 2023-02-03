import React, { FC, useState } from "react";

import styles from "./GroupsSection.module.scss";
import GroupItem from "@/components/pages/Profile/Admin/GroupsSection/GroupItem/GroupItem";
import { GroupType } from "@/types/group.types";
import GroupSearch from "@/components/pages/Profile/Admin/GroupsSection/GroupSearch/GroupSearch";
import Button from "@/components/UI/Button/Button";

const GroupsSection: FC = () => {
  const [groups, setGroups] = useState<GroupType[]>([]);

  return (
    <section className={styles.section}>
      <GroupSearch setGroups={setGroups} />
      <div>
        <div>
          <h2>Группы ({groups.length})</h2>
          <Button primary>Создать группу</Button>
        </div>
        <ul>
          {groups.map((group) => (
            <li key={group.id}>
              <GroupItem group={group} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GroupsSection;
