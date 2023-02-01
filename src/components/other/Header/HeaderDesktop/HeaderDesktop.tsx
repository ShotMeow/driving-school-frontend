import React, { FC } from "react";

import styles from "./HeaderDesktop.module.scss";

import Logo from "../../../UI/Logo/Logo";
import Link from "next/link";
import Button from "../../../UI/Button/Button";

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
              <Link href="/#categories" scroll={false}>
                Тарифы и цены
              </Link>
            </li>
            <li>
              <Link href="/#form" scroll={false}>
                Заявка на обучение
              </Link>
            </li>
            <li>
              <Link href="/contacts#header">Контакты</Link>
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
