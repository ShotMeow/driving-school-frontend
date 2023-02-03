import React, { FC, useEffect, useState } from "react";

import styles from "./InstructorsSearch.module.scss";
import InputPrimary from "@/components/UI/Input/InputPrimary/InputPrimary";
import Button from "@/components/UI/Button/Button";
import Burger from "@/components/other/Icons/Burger";
import { Roles, UserType } from "@/types/user.types";
import { api } from "@/store/api/api";
import { useDebounce } from "@/hooks/useDebounce";

interface Props {
  setInstructors: React.Dispatch<React.SetStateAction<UserType[]>>;
}

const InstructorsSearch: FC<Props> = ({ setInstructors }) => {
  const [value, setValue] = useState<string>("");
  const debounce = useDebounce<string>(value, 500);

  const theory = api.useGetUsersByTypeQuery({
    role: Roles.THEORY_TEACHER,
    search: debounce
  }).data;
  const practice = api.useGetUsersByTypeQuery({
    role: Roles.PRACTICE_TEACHER,
    search: debounce
  }).data;

  useEffect(() => {
    theory && practice && setInstructors(theory.concat(practice));
  }, [practice, theory, setInstructors]);

  return (
    <article className={styles.article}>
      <InputPrimary
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={styles.input}
        title="Имя преподавателя"
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

export default InstructorsSearch;
