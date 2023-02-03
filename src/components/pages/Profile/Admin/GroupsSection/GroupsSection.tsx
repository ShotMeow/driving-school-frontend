import React, { FC } from "react";

import styles from "./GroupsSection.module.scss";
import { api } from "@/store/api/api";
import GroupItem from "@/components/pages/Profile/Admin/GroupsSection/GroupItem/GroupItem";

const GroupsSection: FC = () => {
  const { data } = api.useGetAllGroupsQuery();
  return (
    <section className={styles.section}>
      {data && (
        <ul>
          {data.map((group) => (
            <li key={group.id}>
              <GroupItem group={group} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default GroupsSection;
