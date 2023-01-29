import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  secondary?: boolean;
}

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  primary = false,
  secondary = false,
  ...props
}) => {
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
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
