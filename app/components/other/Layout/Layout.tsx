import React, { FC, PropsWithChildren } from "react";

import Footer from "../Footer/Footer";

import styles from "./Layout.module.scss";
import Header from "@/components/other/Header/Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.top}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
