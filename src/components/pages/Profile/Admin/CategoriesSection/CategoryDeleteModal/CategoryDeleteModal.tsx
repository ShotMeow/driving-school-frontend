import React, { FC } from "react";
import ModalWrapper from "@/components/other/ModalWrapper/ModalWrapper";
import Button from "@/components/UI/Button/Button";

import styles from "./CategoryDeleteModal.module.scss";
import { categoriesApi } from "@/store/api/categories/categories.api";

interface Props {
  modalShown: boolean;
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  categoryId: number;
}

const CategoryDeleteModal: FC<Props> = ({
  modalShown,
  setModalShown,
  categoryId
}) => {
  const [deleteCategory] = categoriesApi.useDeleteCategoryMutation();

  const handleSubmit = () => {
    deleteCategory({ categoryId: categoryId }).then(() => setModalShown(false));
  };

  return (
    <ModalWrapper
      className={styles.modal}
      isShow={modalShown}
      setIsShow={setModalShown}
    >
      <h4>Вы уверены что хотите удалить категорию?</h4>
      <div className={styles.actions}>
        <Button onClick={() => handleSubmit()} primary>
          Удалить
        </Button>
        <Button onClick={() => setModalShown(false)} secondary>
          Отмена
        </Button>
      </div>
    </ModalWrapper>
  );
};

export default CategoryDeleteModal;
