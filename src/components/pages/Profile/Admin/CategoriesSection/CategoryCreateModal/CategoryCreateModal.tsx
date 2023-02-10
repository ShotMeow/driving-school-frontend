import React, { FC, FormEvent, useState } from "react";
import ExitThin from "@/components/other/Icons/ExitThin";
import Button from "@/components/UI/Button/Button";
import ModalWrapper from "@/components/other/ModalWrapper/ModalWrapper";

import styles from "./CategoryCreateModal.module.scss";
import InputPrimary from "@/components/UI/Input/InputPrimary/InputPrimary";
import { categoriesApi } from "@/store/api/categories/categories.api";

interface Props {
  modalShown: boolean;
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoryCreateModal: FC<Props> = ({ modalShown, setModalShown }) => {
  const [value, setValue] = useState<string>("");
  const [createCategory] = categoriesApi.useCreateCategoryMutation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    value && createCategory({ value: value }).then(() => setModalShown(false));
  };

  return (
    <ModalWrapper
      className={styles.modal}
      isShow={modalShown}
      setIsShow={setModalShown}
    >
      <header>
        <h3>Создать категорию</h3>
        <button onClick={() => setModalShown(false)}>
          <ExitThin />
        </button>
      </header>
      <div className={styles.body}>
        <form onSubmit={(event) => handleSubmit(event)}>
          <InputPrimary
            onChange={(event) => setValue(event.target.value)}
            title="Название новой категории"
          />
          <Button type="submit" primary>
            Создать категорию
          </Button>
        </form>
      </div>
      <div></div>
    </ModalWrapper>
  );
};

export default CategoryCreateModal;
