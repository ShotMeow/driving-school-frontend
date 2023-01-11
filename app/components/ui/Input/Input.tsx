import React, { FC, HTMLAttributes, HTMLInputTypeAttribute } from "react";

import styles from "./Input.module.scss";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLInputElement> {
  title: string;
  type?: HTMLInputTypeAttribute;
  dark?: boolean;
  name: string;
  required?: boolean;
}

const Input: FC<Props> = ({
  type = "text",
  title,
  name,
  dark = false,
  required = false,
  ...props
}) => {
  return (
    <label className={styles.input}>
      <h5>{title}</h5>
      <input
        className={classNames({
          [styles.dark]: dark
        })}
        type={type}
        name={name}
        required={required}
        {...props}
      />
    </label>
  );
};

export default Input;
