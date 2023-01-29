import React, { FC } from "react";
import styles from "./LoginModal.module.scss";
import ExitThin from "@/components/other/Icons/ExitThin";
import InputPrimary from "@/components/ui/Input/InputPrimary/InputPrimary";
import Button from "@/components/ui/Button/Button";
import Link from "next/link";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm, Controller } from "react-hook-form";

interface Props {
  setModalType: React.Dispatch<React.SetStateAction<"login" | "register">>;
  setIsModalShow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface LoginFields {
  email: string;
  password: string;
}

const LoginModal: FC<Props> = ({ setIsModalShow, setModalType }) => {
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required("Введите E-mail")
      .matches(
        /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        "Введите валидный E-mail"
      ),
    password: Yup.string()
      .required("Введите пароль")
      .min(8, "Пароль должен содержать минимум 8 символов")
  });
  const validationOpt = { resolver: yupResolver(formSchema) };

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<LoginFields>(validationOpt);

  const onSubmit: SubmitHandler<LoginFields> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.login}>
      <div className={styles.top}>
        <h4>Вход</h4>
        <button onClick={() => setIsModalShow(false)}>
          <ExitThin />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.primary}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <InputPrimary
              type="email"
              title="Электронная почта"
              error={errors.email?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <InputPrimary
              type="password"
              title="Пароль"
              error={errors.password?.message}
              {...field}
            />
          )}
        />
        <Button type="submit" className={styles.auth} primary>
          Войти
        </Button>
      </form>
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
