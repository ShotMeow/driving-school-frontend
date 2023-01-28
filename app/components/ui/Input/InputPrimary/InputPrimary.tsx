import React, {FC, HTMLInputTypeAttribute, InputHTMLAttributes} from "react";

import styles from "./InputPrimary.module.scss";
import InputPhone from "@/components/ui/Input/InputPrimary/InputPhone";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  type?: HTMLInputTypeAttribute;
}

const InputPrimary: FC<Props> = ({
  title,
  ...props
}) => {
  return (
    <label className={styles.input}>
      {props.type === "tel" ? <InputPhone placeholder={title} className={"peer"} {...props} /> : <input
        placeholder={title}
        className={"peer"}
        {...props}
      />}
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
