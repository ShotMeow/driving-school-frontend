import React, { FC, useEffect, useState } from "react";

import styles from "./CategoriesSearch.module.scss";
import InputPrimary from "@/components/UI/Input/InputPrimary/InputPrimary";
import Button from "@/components/UI/Button/Button";
import Burger from "@/components/other/Icons/Burger";
import { useDebounce } from "@/hooks/useDebounce";
import { categoriesApi } from "@/store/api/categories/categories.api";
import { CategoryType } from "@/store/api/categories/categories.types";

interface Props {
  setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
}

const CategoriesSearch: FC<Props> = ({ setCategories }) => {
  const [value, setValue] = useState<string>("");
  const debounce = useDebounce<string>(value, 500);

  const { data } = categoriesApi.useGetCategoriesQuery({ search: debounce });

  useEffect(() => {
    data && setCategories(data);
  }, [data, setCategories]);

  return (
    <article className={styles.article}>
      <InputPrimary
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={styles.input}
        title="Название категории"
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

export default CategoriesSearch;
