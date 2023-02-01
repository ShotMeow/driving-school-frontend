import React, {
  forwardRef,
  HTMLInputTypeAttribute,
  InputHTMLAttributes
} from "react";

import styles from "./Input.module.scss";
import classNames from "classnames";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  type?: HTMLInputTypeAttribute;
  dark?: boolean;
  name: string;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    { type = "text", title, name, dark = false, required = false, ...props },
    ref
  ) => {
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
          ref={ref}
          {...props}
        />
      </label>
    );
  }
);

Input.displayName = "Input";

export default Input;
