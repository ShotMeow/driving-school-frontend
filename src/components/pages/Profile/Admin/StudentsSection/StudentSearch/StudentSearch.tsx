import React, { FC, useEffect, useState } from "react";

import styles from "./StudentSearch.module.scss";
import InputPrimary from "@/components/UI/Input/InputPrimary/InputPrimary";
import Button from "@/components/UI/Button/Button";
import Burger from "@/components/other/Icons/Burger";
import { Roles, UserType } from "@/types/user.types";
import { api } from "@/store/api/api";
import { useDebounce } from "@/hooks/useDebounce";

interface Props {
  setStudents: React.Dispatch<React.SetStateAction<UserType[]>>;
}

const StudentSearch: FC<Props> = ({ setStudents }) => {
  const [value, setValue] = useState<string>("");
  const debounce = useDebounce<string>(value, 500);

  const { data } = api.useGetUsersByTypeQuery({
    role: Roles.STUDENT,
    search: debounce
  });

  useEffect(() => {
    data && setStudents(data);
  }, [data, setStudents]);

  return (
    <article className={styles.article}>
      <InputPrimary
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={styles.input}
        title="Имя ученика"
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

export default StudentSearch;
