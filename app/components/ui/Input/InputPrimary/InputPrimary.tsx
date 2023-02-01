import React, {
  forwardRef,
  HTMLInputTypeAttribute,
  InputHTMLAttributes
} from "react";

import styles from "./InputPrimary.module.scss";
import InputPrimaryPhone from "@/components/ui/Input/InputPrimary/InputPrimaryPhone/InputPrimaryPhone";
import classNames from "classnames";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  error?: string;
  type?: HTMLInputTypeAttribute;
}

const InputPrimary = forwardRef<HTMLInputElement, Props>(
  ({ title, error, ...props }, ref) => {
    return (
      <div
        className={classNames({
          [styles.input]: true,
          [styles.error]: error
        })}
      >
        <label>
          {props.type === "tel" ? (
            <InputPrimaryPhone
              placeholder={title}
              className={"peer"}
              {...props}
            />
          ) : (
            <input
              placeholder={title}
              className={"peer"}
              ref={ref}
              {...props}
            />
          )}
          <span
            className={
              "peer-placeholder-shown:top-1 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray"
            }
          >
            {title}
          </span>
        </label>
        <p className={styles.message}>{error}</p>
      </div>
    );
  }
);

InputPrimary.displayName = "InputPrimary";

export default InputPrimary;
