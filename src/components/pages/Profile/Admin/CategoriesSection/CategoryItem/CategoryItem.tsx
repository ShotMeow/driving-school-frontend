import React, { FC, useState } from "react";

import styles from "./CategoryItem.module.scss";
import Button from "@/components/UI/Button/Button";
import { AnimatePresence } from "framer-motion";
import CategoryDeleteModal from "@/components/pages/Profile/Admin/CategoriesSection/CategoryDeleteModal/CategoryDeleteModal";
import CategoryChangeModal from "@/components/pages/Profile/Admin/CategoriesSection/CategoryChangeModal/CategoryChangeModal";
import { CategoryType } from "@/store/api/categories/categories.types";

interface Props {
  category: CategoryType;
}

const CategoryItem: FC<Props> = ({ category }) => {
  const [modalDeleteShown, setModalDeleteShown] = useState<boolean>(false);
  const [modalChangeShown, setModalChangeShown] = useState<boolean>(false);

  return (
    <article className={styles.item}>
      <p>Категория {category.value}</p>
      <div className={styles.actions}>
        <Button onClick={() => setModalChangeShown(true)} primary>
          Редактировать
        </Button>
        <Button onClick={() => setModalDeleteShown(true)} secondary>
          Удалить
        </Button>
      </div>
      <AnimatePresence>
        {modalDeleteShown && (
          <CategoryDeleteModal
            categoryId={category.id}
            modalShown={modalDeleteShown}
            setModalShown={setModalDeleteShown}
          />
        )}
        {modalChangeShown && (
          <CategoryChangeModal
            categoryId={category.id}
            modalShown={modalChangeShown}
            setModalShown={setModalChangeShown}
          />
        )}
      </AnimatePresence>
    </article>
  );
};

export default CategoryItem;
