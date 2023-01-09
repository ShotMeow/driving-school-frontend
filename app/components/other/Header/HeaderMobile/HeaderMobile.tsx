import React, { FC, useState } from "react";

import styles from "./HeaderMobile.module.scss";
import Logo from "@/components/ui/Logo/Logo";
import Burger from "@/components/other/Icons/Burger";
import Dropdown from "@/components/other/Header/HeaderMobile/Dropdown/Dropdown";

const HeaderMobile: FC = () => {
  const [isModal, setIsModal] = useState<boolean>(false);

  return (
    <header className={styles.mobile}>
      <Logo />
      <button onClick={() => setIsModal(true)}>
        <Burger />
      </button>
      <Dropdown isModal={isModal} setIsModal={setIsModal} />
    </header>
  );
};

export default HeaderMobile;
