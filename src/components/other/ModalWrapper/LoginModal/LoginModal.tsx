import React, { FC } from "react";
import styles from "./LoginModal.module.scss";
import ExitThin from "../../Icons/ExitThin";
import InputPrimary from "../../../UI/Input/InputPrimary/InputPrimary";
import Button from "../../../UI/Button/Button";
import Link from "next/link";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { LoginType } from "@/store/auth/auth.types";
import { useRouter } from "next/navigation";
import { api } from "@/store/api/api";

interface Props {
  setModalType: React.Dispatch<React.SetStateAction<"login" | "register">>;
  setIsModalShow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface LoginFields extends LoginType {}

const LoginModal: FC<Props> = ({ setIsModalShow, setModalType }) => {
  const router = useRouter();
  const [login] = api.useLoginMutation();

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
    setError,
    formState: { errors }
  } = useForm<LoginFields>(validationOpt);

  const onSubmit: SubmitHandler<LoginFields> = (data) => {
    login(data)
      .then((data: any) => {
        console.log("Then", data);
        if (data.error) {
          switch (data.error.data.field) {
            case "password":
              setError("password", {
                message: data.error.data.message
              });
              break;
            case "all":
              setError("email", {
                message: "ㅤ"
              });
              setError("password", {
                message: data.error.data.message
              });
              break;
            default:
              setError("email", {
                message: "ㅤ"
              });
              setError("password", {
                message: "Ошибка сервера. Попробуйте позже"
              });
              break;
          }
        } else {
          router.push("/profile");
        }
      })
      .catch((error) => console.log("Error", error));
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
          defaultValue={""}
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
          defaultValue={""}
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
