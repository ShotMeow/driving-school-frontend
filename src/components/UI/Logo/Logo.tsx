import React, { FC } from "react";

import Image from "next/image";

import styles from "./Logo.module.scss";
import Link from "next/link";

import logo from "/public/favicon.png";

const Logo: FC = () => {
  return (
    <Link
      href="/src/components/pages#header"
      scroll={false}
      className={styles.logo}
    >
      <Image src={logo} alt="Логотип" width={48} height={51} />
      <span className={styles.title}>Автошкола</span>
    </Link>
  );
};

export default Logo;
