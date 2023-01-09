import React, { FC } from "react";

import logo from "@/images/logo.png";

import Image from "next/image";

import styles from "./Logo.module.scss";
import Link from "next/link";

const Logo: FC = () => {
  return (
    <Link href="/" className={styles.logo}>
      <Image src={logo} alt="Логотип" width={40} height={40} />
      <span className={styles.title}>Автошкола</span>
    </Link>
  );
};

export default Logo;
