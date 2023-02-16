import React, { forwardRef, SelectHTMLAttributes } from "react";

import styles from "./Select.module.scss";
import classNames from "classnames";

export enum SelectTypes {
  Users,
  Categories,
  Groups,
  Schedule
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  title?: string;
  type?: SelectTypes;
  options: any[];
}

const Select = forwardRef<HTMLSelectElement, Props>(
  ({ title, options, type, className, ...props }, ref) => {
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
          <select defaultValue="DEFAULT" ref={ref} {...props}>
            <option value="DEFAULT" disabled hidden>
              Выберите значение
            </option>
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.surname} {option.name[0]}.{" "}
                {option.patronymic && option.patronymic[0] + "."}
              </option>
            ))}
          </select>
        )}
        {type === SelectTypes.Categories && (
          <select defaultValue="DEFAULT" ref={ref} {...props}>
            <option value="DEFAULT" disabled hidden>
              Выберите значение
            </option>
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.value}
              </option>
            ))}
          </select>
        )}
        {type === SelectTypes.Groups && (
          <select defaultValue="DEFAULT" ref={ref} {...props}>
            <option value="DEFAULT" disabled hidden>
              Выберите значение
            </option>
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                № {option.id}
              </option>
            ))}
          </select>
        )}
        {type === SelectTypes.Schedule && (
          <select defaultValue="DEFAULT" ref={ref} {...props}>
            <option value="DEFAULT" disabled hidden>
              Выберите значение
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        )}
      </label>
    );
  }
);

Select.displayName = "Select";

export default Select;
