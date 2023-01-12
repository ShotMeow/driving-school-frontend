import React, { FC } from "react";
import styles from "./LoginModal.module.scss";
import ExitThin from "@/components/other/Icons/ExitThin";
import InputPrimary from "@/components/ui/Input/InputPrimary/InputPrimary";
import Button from "@/components/ui/Button/Button";
import Link from "next/link";

interface Props {
  setModalType: React.Dispatch<React.SetStateAction<"login" | "register">>;
  setIsModalShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginModal: FC<Props> = ({ setIsModalShow, setModalType }) => {
  return (
    <div className={styles.login}>
      <div className={styles.top}>
        <h4>Вход</h4>
        <button onClick={() => setIsModalShow(false)}>
          <ExitThin />
        </button>
      </div>
      <div className={styles.primary}>
        <InputPrimary title="Эл почта или телефон" name="login" />
        <InputPrimary title="Пароль" name="password" type="password" />
        <button className={styles.miss}>Забыли пароль?</button>
        <Button className={styles.auth} primary>
          Войти
        </Button>
      </div>
      <div className={styles.footer}>
        <p>
          Новый пользователь?{" "}
          <button onClick={() => setModalType("register")}>
            Зарегистрируйтесь
          </button>
        </p>
        <p className={styles.info}>
          Ввод данных подтверждает ваше согласие с{" "}
          <Link href={"/"}>политикой конфиденциальности</Link> и{" "}
          <Link href={"/"}>обработкой персональных данных</Link>.
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
