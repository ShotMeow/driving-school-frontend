import React, { FC } from "react";
import ExitThin from "@/components/other/Icons/ExitThin";
import InputPrimary from "@/components/ui/Input/InputPrimary/InputPrimary";
import Button from "@/components/ui/Button/Button";
import styles from "./RegisterModal.module.scss";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  setModalType: React.Dispatch<React.SetStateAction<"login" | "register">>;
  setIsModalShow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Inputs {
  fio: string;
  phone: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const RegisterModal: FC<Props> = ({ setIsModalShow, setModalType }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.register}>
      <div className={styles.top}>
        <h4>Регистрация</h4>
        <button onClick={() => setIsModalShow(false)}>
          <ExitThin />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.primary}>
        <InputPrimary
          {...register("fio", {
            required: true
          })}
          title="ФИО"
          name="name"
        />
        <InputPrimary
          {...register("phone", {
            required: true
          })}
          title="Номер телефона"
          name="tel"
        />
        <InputPrimary
          {...register("email", {
            required: true
          })}
          title="Эл. почта"
          name="email"
        />
        <InputPrimary
          {...register("fio", {
            required: true
          })}
          title="Пароль"
          name="password"
        />
        <InputPrimary
          {...register("repeatPassword", {
            required: true,
            validate: (value: string) => {
              if (watch("password") !== value) {
                return "Пароли не совпадают";
              }
            }
          })}
          title="Подтвердите пароль"
          name="repeat_password"
        />
        <Button className={styles.register} primary>
          Зарегистрироваться
        </Button>
      </form>
      <div className={styles.footer}>
        <p>
          Уже есть аккаунт?{" "}
          <button onClick={() => setModalType("login")}>Авторизуйтесь</button>
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

export default RegisterModal;
