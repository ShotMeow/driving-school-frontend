import React, { FC, PropsWithChildren } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from "./Layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
