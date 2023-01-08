import React, { FC } from "react";

import { useAdaptive } from "../../../hooks/useAdaptive";

import HeaderMobile from "./HeaderMobile/HeaderMobile";
import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";

import styles from "./Header.module.scss";

const Header: FC = () => {
  const { isMobile } = useAdaptive();
  return (
    <div className={styles.header}>
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
    </div>
  );
};

export default Header;
