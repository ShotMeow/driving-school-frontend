import React, { FC } from "react";

import Image from "next/image";

import styles from "./Logo.module.scss";
import Link from "next/link";

const Logo: FC = () => {
  return (
    <Link href="/" className={styles.logo}>
      <Image src='/images/logo.png' alt="Логотип" width={40} height={40} />
      <span className={styles.title}>Автошкола</span>
    </Link>
  );
};

export default Logo;
