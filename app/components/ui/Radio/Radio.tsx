import React, { FC, HTMLAttributes } from "react";

import styles from "./Radio.module.scss";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLInputElement> {
  title: string;
  name: string;
  dark?: boolean;
  required?: boolean;
}

const Radio: FC<Props> = ({
  title,
  name,
  dark = false,
  required = false,
  ...props
}) => {
  return (
    <label
      className={classNames({
        [styles.radio]: true,
        [styles.dark]: dark
      })}
    >
      <input
        type="radio"
        required={required}
        {...props}
        name={name}
        id={name}
      />
      <h6>{title}</h6>
    </label>
  );
};

export default Radio;
