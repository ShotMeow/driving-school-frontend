import React, { FC, HTMLAttributes, PropsWithChildren, useEffect } from "react";

import styles from "./ModalWrapper.module.scss";
import { createPortal } from "react-dom";
import classNames from "classnames";
import { motion } from "framer-motion";

interface Props extends HTMLAttributes<HTMLElement> {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalWrapper: FC<PropsWithChildren<Props>> = ({
  isShow,
  setIsShow,
  children,
  className,
  ...props
}) => {
  useEffect(() => {
    if (isShow) document.documentElement.classList.add("--prevent-scroll");

    return () => {
      document.documentElement.classList.remove("--prevent-scroll");
    };
  }, [isShow]);

  useEffect(() => {
    const documentKeydownListener = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsShow(false);
    };

    document.addEventListener("keydown", documentKeydownListener);

    return () => {
      document.removeEventListener("keydown", documentKeydownListener);
    };
  }, [setIsShow]);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsShow(false)}
      className={styles.modal}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <div
          onClick={(event) => event.stopPropagation()}
          onKeyDown={(event) => event.stopPropagation()}
          className={classNames(
            {
              [styles.inner]: true
            },
            className
          )}
          {...props}
        >
          {children}
        </div>
      </motion.div>
    </motion.div>,
    document.getElementById("overlay") as HTMLElement
  );
};

export default ModalWrapper;
