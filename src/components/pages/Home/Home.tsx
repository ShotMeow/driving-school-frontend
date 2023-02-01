import React, { FC } from "react";

import styles from "./Home.module.scss";
import CategoriesSection from "./CategoriesSection/CategoriesSection";
import FormSection from "./FormSection/FormSection";
import PrimarySection from "./PrimarySection/PrimarySection";
import QuestionsSection from "./QuestionsSection/QuestionsSection";

const Home: FC = () => {
  return (
    <main className={styles.main}>
      <PrimarySection />
      <CategoriesSection />
      <QuestionsSection />
      <FormSection />
    </main>
  );
};

export default Home;
