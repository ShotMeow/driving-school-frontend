import React, { FC, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

import styles from "./InputPrimary.module.scss";
import InputPhone from "@/components/ui/Input/InputPrimary/InputPhone";
import classNames from "classnames";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  error?: string;
  type?: HTMLInputTypeAttribute;
}

const InputPrimary: FC<Props> = ({ title, error, ...props }) => {
  return (
    <div
      className={classNames({
        [styles.input]: true,
        [styles.error]: error
      })}
    >
      <label>
        {props.type === "tel" ? (
          <InputPhone placeholder={title} className={"peer"} {...props} />
        ) : (
          <input placeholder={title} className={"peer"} {...props} />
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
};

export default InputPrimary;
