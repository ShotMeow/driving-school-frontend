import React, { FC, forwardRef, InputHTMLAttributes } from "react";

import styles from "./Radio.module.scss";
import classNames from "classnames";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  dark?: boolean;
  required?: boolean;
}

const Radio: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ title, dark = false, required = false, ...props }, ref) => {
    return (
      <label
        className={classNames({
          [styles.radio]: true,
          [styles.dark]: dark
        })}
      >
        <input type="radio" required={required} {...props} ref={ref} />
        <h6>{title}</h6>
      </label>
    );
  }
);

Radio.displayName = "Radio";

export default Radio;
