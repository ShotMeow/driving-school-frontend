import React, { FC, FormEvent, useState } from "react";
import ExitThin from "@/components/other/Icons/ExitThin";
import Button from "@/components/UI/Button/Button";
import ModalWrapper from "@/components/other/ModalWrapper/ModalWrapper";

import styles from "./CategoryChangeModal.module.scss";
import InputPrimary from "@/components/UI/Input/InputPrimary/InputPrimary";
import { categoriesApi } from "@/store/api/categories/categories.api";

interface Props {
  modalShown: boolean;
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  categoryId: number;
}

const CategoryChangeModal: FC<Props> = ({
  categoryId,
  modalShown,
  setModalShown
}) => {
  const [value, setValue] = useState<string>("");
  const [changeCategory] = categoriesApi.useUpdateCategoryMutation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    value &&
      changeCategory({ categoryId: categoryId, value: value }).then(() =>
        setModalShown(false)
      );
  };

  return (
    <ModalWrapper
      className={styles.modal}
      isShow={modalShown}
      setIsShow={setModalShown}
    >
      <header>
        <h3>Редактирование категории</h3>
        <button onClick={() => setModalShown(false)}>
          <ExitThin />
        </button>
      </header>
      <div className={styles.body}>
        <form onSubmit={(event) => handleSubmit(event)}>
          <InputPrimary
            onChange={(event) => setValue(event.target.value)}
            title="Новое название категории"
          />
          <Button type="submit" primary>
            Изменить категорию
          </Button>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default CategoryChangeModal;
