import React, { FC, PropsWithChildren } from "react";

import Footer from "../Footer/Footer";

import styles from "./Layout.module.scss";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../Header/Header"), {
  ssr: false
});

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
