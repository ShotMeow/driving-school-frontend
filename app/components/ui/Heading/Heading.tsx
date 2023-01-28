import React, { FC, HTMLAttributes, PropsWithChildren } from "react";

import styles from "./Heading.module.scss";

interface Props extends HTMLAttributes<HTMLHeadingElement> {}

const Heading: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h2 className={styles.heading} {...props}>
      {children}
    </h2>
  );
};

export default Heading;
