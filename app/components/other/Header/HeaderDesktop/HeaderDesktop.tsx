import React, { FC } from "react";

import styles from "./HeaderDesktop.module.scss";

import Logo from "@/components/ui/Logo/Logo";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";

interface Props {
  setIsModalShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderDesktop: FC<Props> = ({ setIsModalShow }) => {
  return (
    <header className={styles.desktop}>
      <div className={styles.about}>
        <Logo />
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link href="/tariffs">Тарифы и цены</Link>
            </li>
            <li>
              <Link href="/steps">Этапы обучения</Link>
            </li>
            <li>
              <Link href="/contacts">Контакты</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.actions}>
        <Button
          onClick={() => (document.location.href = "tel:89857751262")}
          className={styles.phone}
          primary
        >
          +7 (985) 775-12-62
        </Button>
        <Button
          onClick={() => setIsModalShow((prev) => !prev)}
          className={styles.authorize}
          secondary
        >
          Авторизация
        </Button>
      </div>
    </header>
  );
};

export default HeaderDesktop;
