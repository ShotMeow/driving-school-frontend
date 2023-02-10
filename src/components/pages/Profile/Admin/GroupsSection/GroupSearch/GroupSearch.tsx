import React, { FC, useEffect, useState } from "react";

import styles from "./GroupSearch.module.scss";
import InputPrimary from "@/components/UI/Input/InputPrimary/InputPrimary";
import Button from "@/components/UI/Button/Button";
import Burger from "@/components/other/Icons/Burger";
import { useDebounce } from "@/hooks/useDebounce";
import { groupsApi } from "@/store/api/groups/groups.api";
import { GroupType } from "@/store/api/groups/groups.types";

interface Props {
  setGroups: React.Dispatch<React.SetStateAction<GroupType[]>>;
}

const GroupSearch: FC<Props> = ({ setGroups }) => {
  const [value, setValue] = useState<string>("");
  const debounce = useDebounce<string>(value, 500);

  const { data } = groupsApi.useGetGroupsQuery({ search: debounce });

  useEffect(() => {
    data && setGroups(data);
  }, [data, setGroups]);

  return (
    <article className={styles.article}>
      <InputPrimary
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={styles.input}
        title="Название группы"
      />
      <Button className={styles.search} primary>
        Найти
      </Button>
      <Button className={styles.filter} secondary>
        <Burger />
        Фильтры
      </Button>
    </article>
  );
};

export default GroupSearch;
