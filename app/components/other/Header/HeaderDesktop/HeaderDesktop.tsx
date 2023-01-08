import React, { FC } from "react";

import styles from "./HeaderDesktop.module.scss";

import Logo from "@/components/ui/Logo/Logo";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import ListItem from "@/components/ui/ListItem/ListItem";

const HeaderDesktop: FC = () => {
  return (
    <header className={styles.desktop}>
      <div className={styles.about}>
        <Logo />
        <nav className={styles.navigation}>
          <ul>
            <ListItem>
              <Link href="/tariffs">Тарифы и цены</Link>
            </ListItem>
            <ListItem>
              <Link href="/steps">Этапы обучения</Link>
            </ListItem>
            <ListItem>
              <Link href="/contacts">Контакты</Link>
            </ListItem>
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
        <Button className={styles.authorize} secondary>
          Авторизация
        </Button>
      </div>
    </header>
  );
};

export default HeaderDesktop;
