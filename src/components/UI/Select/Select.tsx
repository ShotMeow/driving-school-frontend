import React, { FC, SelectHTMLAttributes } from "react";

import styles from "./Select.module.scss";
import classNames from "classnames";

export enum SelectTypes {
  Users,
  Categories,
  Groups
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  title?: string;
  type?: SelectTypes;
  options: any[];
}

const Select: FC<Props> = ({ title, options, type, className, ...props }) => {
  return (
    <label
      className={classNames(
        {
          [styles.select]: true
        },
        className
      )}
    >
      {title && <h5>{title}</h5>}
      {type === SelectTypes.Users && (
        <select {...props}>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.surname} {option.name[0]}.{" "}
              {option.patronymic && option.patronymic[0] + "."}
            </option>
          ))}
        </select>
      )}
      {type === SelectTypes.Categories && (
        <select {...props}>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.value}
            </option>
          ))}
        </select>
      )}
      {type === SelectTypes.Groups && (
        <select {...props}>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              № {option.id}
            </option>
          ))}
        </select>
      )}
      {type !== SelectTypes.Categories &&
        type !== SelectTypes.Users &&
        type !== SelectTypes.Groups && (
          <select {...props}>
            {options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        )}
    </label>
  );
};

export default Select;
