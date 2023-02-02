import React, { FC } from "react";

import styles from "./ErrorMessage.module.scss";

const ErrorMessage: FC = () => {
  return (
    <article className={styles.error}>
      <ErrorMessage /> Вы пока что не записаны на обучение.
    </article>
  );
};

export default ErrorMessage;
