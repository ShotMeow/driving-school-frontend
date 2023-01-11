import React, { FC, HTMLAttributes, HTMLInputTypeAttribute } from "react";

import styles from "./InputPrimary.module.scss";

interface Props extends HTMLAttributes<HTMLInputElement> {
  title: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
}

const InputPrimary: FC<Props> = ({
  title,
  name,
  type = "text",
  required = false,
  ...props
}) => {
  return (
    <label className={styles.input}>
      <input
        name={name}
        required={required}
        placeholder={title}
        type={type}
        className={"peer"}
        {...props}
      />
      <span
        className={
          "peer-placeholder-shown:top-1 peer-placeholder-shown:text-gray peer-placeholder-shown:text-lg"
        }
      >
        {title}
      </span>
    </label>
  );
};

export default InputPrimary;
