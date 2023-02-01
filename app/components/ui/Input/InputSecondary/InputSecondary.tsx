import React, { forwardRef, InputHTMLAttributes } from "react";

import styles from "./InputSecondary.module.scss";
import classNames from "classnames";
import InputSecondaryPhone from "@/components/ui/Input/InputSecondary/InputSecondaryPhone/InputSecondaryPhone";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  dark?: boolean;
}

const InputSecondary = forwardRef<HTMLInputElement, Props>(
  ({ title, dark = false, ...props }, ref) => {
    return (
      <label className={styles.input}>
        <h5>{title}</h5>
        {props.type === "tel" ? (
          <InputSecondaryPhone {...props} />
        ) : (
          <input
            className={classNames({
              [styles.dark]: dark
            })}
            ref={ref}
            {...props}
          />
        )}
      </label>
    );
  }
);

InputSecondary.displayName = "InputSecondary";

export default InputSecondary;
