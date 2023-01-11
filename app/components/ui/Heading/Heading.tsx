import React, { FC, HTMLAttributes, PropsWithChildren } from "react";

import styles from "./Heading.module.scss";
import classNames from "classnames";
import { useAdaptive } from "@/hooks/useAdaptive";

interface Props extends HTMLAttributes<HTMLHeadingElement> {}

const Heading: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  ...props
}) => {
  const { isMobile } = useAdaptive();
  return (
    <h2
      className={classNames(
        {
          [styles.heading]: true,
          [styles.small]: isMobile
        },
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export default Heading;
