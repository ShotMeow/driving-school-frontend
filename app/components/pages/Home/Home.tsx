import React, { FC } from "react";

import styles from "./Home.module.scss";
import dynamic from "next/dynamic";

const PrimarySection = dynamic(import("./PrimarySection/PrimarySection"), {
  ssr: false
});

const CategoriesSection = dynamic(
  import("./CategoriesSection/CategoriesSection"),
  {
    ssr: false
  }
);

const Home: FC = () => {
  return (
    <main className={styles.main}>
      <PrimarySection />
      <CategoriesSection />
    </main>
  );
};

export default Home;
