import React, { FC } from "react";

import styles from "./ErrorMessage.module.scss";
import Error from "@/components/other/Icons/Error";

const ErrorMessage: FC = () => {
  return (
    <article className={styles.error}>
      <Error />
      Вы пока что не записаны на обучение.
    </article>
  );
};

export default ErrorMessage;
