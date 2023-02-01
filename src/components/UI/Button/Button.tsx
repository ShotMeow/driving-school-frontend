import React, { ButtonHTMLAttributes, forwardRef } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  secondary?: boolean;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    { children, className, primary = false, secondary = false, ...props },
    ref
  ) => {
    return (
      <button
        className={classNames(
          {
            [styles.button]: true,
            [styles.primary]: primary,
            [styles.secondary]: secondary
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
