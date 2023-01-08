import React, { FC, PropsWithChildren } from "react";

import styles from "./ListItem.module.scss";

const ListItem: FC<PropsWithChildren> = ({ children }) => {
  return <li className={styles.item}>{children}</li>;
};

export default ListItem;
