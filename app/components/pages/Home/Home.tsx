import React, { FC } from "react";

import styles from "./Home.module.scss";
import CategoriesSection from "@/components/pages/Home/CategoriesSection/CategoriesSection";
import FormSection from "@/components/pages/Home/FormSection/FormSection";
import PrimarySection from "@/components/pages/Home/PrimarySection/PrimarySection";
import QuestionsSection from "@/components/pages/Home/QuestionsSection/QuestionsSection";

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
