import React, { FC, forwardRef, InputHTMLAttributes } from "react";

import styles from "./Radio.module.scss";
import classNames from "classnames";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  name: string;
  dark?: boolean;
  required?: boolean;
}

const Radio: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ title, name, dark = false, required = false, ...props }) => {
    return (
      <label
        className={classNames({
          [styles.radio]: true,
          [styles.dark]: dark
        })}
      >
        <input type="radio" required={required} {...props} name={name} />
        <h6>{title}</h6>
      </label>
    );
  }
);

Radio.displayName = "Radio";

export default Radio;
