import React, { FC } from "react";
import ExitThin from "../../Icons/ExitThin";
import InputPrimary from "../../../UI/Input/InputPrimary/InputPrimary";
import Button from "../../../UI/Button/Button";
import styles from "./RegisterModal.module.scss";
import Link from "next/link";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { authApi } from "@/store/api/auth/auth.api";
import { RegisterType } from "@/store/api/auth/auth.types";

interface Props {
  setModalType: React.Dispatch<React.SetStateAction<"login" | "register">>;
  setIsModalShow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface RegisterFields {
  fio: string;
  phone: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const RegisterModal: FC<Props> = ({ setIsModalShow, setModalType }) => {
  const [register] = authApi.useRegisterMutation();
  const router = useRouter();

  const formSchema = Yup.object().shape({
    fio: Yup.string()
      .required("Введите ваше ФИО")
      .matches(
        /^[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{0,}\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,}(\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,})?$/,
        "Введите корректное ФИО"
      ),
    phone: Yup.string()
      .required("Введите номер вашего телефона")
      .matches(
        /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/,
        "Введите корректный номер телефона"
      ),
    email: Yup.string()
      .required("Введите ваш E-mail адрес")
      .matches(
        /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        "Введите валидный E-mail"
      ),
    password: Yup.string()
      .required("Введите пароль")
      .min(8, "Пароль должен содержать минимум 8 символов"),
    repeatPassword: Yup.string()
      .required("Подтвердите пароль")
      .oneOf([Yup.ref("password")], "Пароли не совпадают")
  });
  const validationOpt = { resolver: yupResolver(formSchema) };

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors }
  } = useForm<RegisterFields>(validationOpt);

  const onSubmit: SubmitHandler<RegisterFields> = (data) => {
    const fio = data.fio.split(" ");

    const body: RegisterType = {
      surname: fio[0],
      name: fio[1],
      patronymic: fio[2],
      ...data
    };

    !fio[2] && Reflect.deleteProperty(body, "patronymic");

    register(body).then((data: any) => {
      if (data.error) {
        if (data.error.status === 404) {
          setError("fio", {
            message: "ㅤ"
          });
          setError("phone", {
            message: "ㅤ"
          });
          setError("email", {
            message: "ㅤ"
          });
          setError("password", {
            message: "ㅤ"
          });
          setError("repeatPassword", {
            message: "Ошибка сервера. Попробуйте позже"
          });
        }
        switch (data.error.data.field) {
          case "phone":
            setError("phone", {
              message: data.error.data.error
            });
            break;
          case "email":
            setError("email", {
              message: data.error.data.error
            });
            break;
          default:
            setError("fio", {
              message: "ㅤ"
            });
            setError("phone", {
              message: "ㅤ"
            });
            setError("email", {
              message: "ㅤ"
            });
            setError("password", {
              message: "ㅤ"
            });
            setError("repeatPassword", {
              message: "Ошибка сервера. Попробуйте позже"
            });
            break;
        }
      } else {
        router.push("/profile");
      }
    });
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
        <Controller
          name="fio"
          defaultValue={""}
          control={control}
          render={({ field }) => (
            <InputPrimary title="ФИО" error={errors.fio?.message} {...field} />
          )}
        />
        <Controller
          name="phone"
          defaultValue={""}
          control={control}
          render={({ field }) => (
            <InputPrimary
              type="tel"
              title="Номер телефона"
              error={errors.phone?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          defaultValue={""}
          control={control}
          render={({ field }) => (
            <InputPrimary
              type="email"
              title="Эл. почта"
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
        <Controller
          name="repeatPassword"
          defaultValue={""}
          control={control}
          render={({ field }) => (
            <InputPrimary
              type="password"
              title="Подтвердите пароль"
              error={errors.repeatPassword?.message}
              {...field}
            />
          )}
        />
        <Button type="submit" className={styles.register} primary>
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
