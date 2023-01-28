import React, { FC, useState } from "react";

import styles from "./HeaderMobile.module.scss";
import Logo from "@/components/ui/Logo/Logo";
import Burger from "@/components/other/Icons/Burger";
import dynamic from "next/dynamic";

const Dropdown = dynamic(
  import("@/components/other/Header/HeaderMobile/Dropdown/Dropdown"),
  {
    ssr: false
  }
);

interface Props {
  setIsModalShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderMobile: FC<Props> = ({ setIsModalShow }) => {
  const [isDropdown, setIsDropdown] = useState<boolean>(false);

  return (
    <header className={styles.mobile}>
      <Logo />
      <button onClick={() => setIsDropdown(true)}>
        <Burger />
      </button>
      <Dropdown
        setIsModalShow={setIsModalShow}
        isDropdown={isDropdown}
        setIsDropdown={setIsDropdown}
      />
    </header>
  );
};

export default HeaderMobile;
