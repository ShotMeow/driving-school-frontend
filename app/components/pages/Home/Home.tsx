import React, { FC } from "react";

import styles from "./Home.module.scss";
import dynamic from "next/dynamic";
import CategoriesSection from "@/components/pages/Home/CategoriesSection/CategoriesSection";

const PrimarySection = dynamic(import("./PrimarySection/PrimarySection"), {
  ssr: false
});

const Home: FC = () => {
  return (
    <main className={styles.main}>
      <PrimarySection />
      <CategoriesSection />
    </main>
  );
};

export default Home;
