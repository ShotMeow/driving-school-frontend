import React, { FC, useEffect, useState } from "react";

import styles from "./GroupSearch.module.scss";
import InputPrimary from "@/components/UI/Input/InputPrimary/InputPrimary";
import Button from "@/components/UI/Button/Button";
import Burger from "@/components/other/Icons/Burger";
import { api } from "@/store/api/api";
import { useDebounce } from "@/hooks/useDebounce";
import { GroupType } from "@/types/group.types";

interface Props {
  setGroups: React.Dispatch<React.SetStateAction<GroupType[]>>;
  modalShown: boolean;
}

const GroupSearch: FC<Props> = ({ modalShown, setGroups }) => {
  const [value, setValue] = useState<string>("");
  const debounce = useDebounce<string>(value, 500);

  const { data, refetch } = api.useGetAllGroupsQuery({ search: debounce });

  useEffect(() => {
    data && setGroups(data);
  }, [data, setGroups]);

  useEffect(() => {
    refetch();
  }, [modalShown, refetch]);

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
