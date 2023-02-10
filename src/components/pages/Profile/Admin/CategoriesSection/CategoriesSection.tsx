import React, { FC, useState } from "react";

import styles from "./CategoriesSection.module.scss";
import Button from "@/components/UI/Button/Button";
import { AnimatePresence } from "framer-motion";
import CategoriesSearch from "@/components/pages/Profile/Admin/CategoriesSection/CategoriesSearch/CategoriesSearch";
import CategoryCreateModal from "@/components/pages/Profile/Admin/CategoriesSection/CategoryCreateModal/CategoryCreateModal";
import CategoryItem from "@/components/pages/Profile/Admin/CategoriesSection/CategoryItem/CategoryItem";
import { CategoryType } from "@/store/api/categories/categories.types";

const CategoriesSection: FC = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [modalCreateShown, setModalCreateShown] = useState<boolean>(false);

  return (
    <section className={styles.section}>
      <CategoriesSearch setCategories={setCategories} />
      <div>
        <div>
          <h2>Категории ({categories.length})</h2>
          <Button onClick={() => setModalCreateShown(true)} primary>
            Создать категорию
          </Button>
        </div>
        <ul>
          {categories &&
            categories.map((category) => (
              <li key={category.id}>
                <CategoryItem category={category} />
              </li>
            ))}
        </ul>
      </div>
      <AnimatePresence>
        {modalCreateShown && (
          <CategoryCreateModal
            modalShown={modalCreateShown}
            setModalShown={setModalCreateShown}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default CategoriesSection;
