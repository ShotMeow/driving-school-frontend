import React, { FC } from "react";

import styles from "./Home.module.scss";
import dynamic from "next/dynamic";

const PrimarySection = dynamic(import("./PrimarySection/PrimarySection"));

const CategoriesSection = dynamic(
  import("./CategoriesSection/CategoriesSection"),
  {
    ssr: false
  }
);

const QuestionsSection = dynamic(
  import("./QuestionsSection/QuestionsSection"),
  {
    ssr: false
  }
);

const FormSection = dynamic(import("./FormSection/FormSection"));

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
