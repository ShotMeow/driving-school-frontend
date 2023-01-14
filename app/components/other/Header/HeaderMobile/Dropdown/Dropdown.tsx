import React, { FC, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

import styles from "./Dropdown.module.scss";
import Button from "@/components/ui/Button/Button";
import Logo from "@/components/ui/Logo/Logo";
import Cross from "@/components/other/Icons/Cross";
import classNames from "classnames";
import { createFocusTrap } from "focus-trap";

interface Props {
  isDropdown: boolean;
  setIsDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown: FC<Props> = ({ setIsModalShow, isDropdown, setIsDropdown }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const trap = createFocusTrap(ref.current as HTMLDivElement, {
      allowOutsideClick: true
    });

    if (isDropdown) trap.activate();

    return () => {
      trap.deactivate();
    };
  }, [isDropdown]);

  return createPortal(
    <div
      className={classNames({
        [styles.overlay]: true,
        [styles.show]: isDropdown
      })}
      onClick={() => setIsDropdown(false)}
    >
      <div
        className={styles.dropdown}
        onClick={(event) => event.stopPropagation()}
        ref={ref}
      >
        <div className={styles.header}>
          <button onClick={() => setIsDropdown(false)}>
            <Logo />
          </button>
          <button onClick={() => setIsDropdown(false)}>
            <Cross />
          </button>
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link
                href="/#categories"
                onClick={() => setIsDropdown(false)}
                scroll={false}
              >
                Тарифы и цены
              </Link>
            </li>
            <li>
              <Link
                href="/#form"
                onClick={() => setIsDropdown(false)}
                scroll={false}
              >
                Заявка на обучение
              </Link>
            </li>
            <li>
              <Link href="/contacts">Контакты</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <Button
            onClick={() => (document.location.href = "tel:89857751262")}
            className={styles.phone}
            primary
          >
            +7 (985) 775-12-62
          </Button>
          <Button
            onClick={() => setIsModalShow(true)}
            className={styles.authorize}
            secondary
          >
            Авторизация
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById("overlay") as HTMLElement
  );
};

export default Dropdown;
