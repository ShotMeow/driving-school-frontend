import React, { FC } from "react";

import Image from "next/image";

import styles from "./Logo.module.scss";
import Link from "next/link";

const Logo: FC = () => {
  return (
    <Link href="/" className={styles.logo}>
      <Image src="/images/logo.png" alt="Логотип" width={35} height={35} />
      <span className={styles.title}>Автошкола</span>
    </Link>
  );
};

export default Logo;
