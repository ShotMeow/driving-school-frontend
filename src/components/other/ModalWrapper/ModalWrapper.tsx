import React, {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useRef
} from "react";

import styles from "./ModalWrapper.module.scss";
import { createPortal } from "react-dom";
import classNames from "classnames";
import { motion } from "framer-motion";
import { createFocusTrap } from "focus-trap";

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
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const trap = createFocusTrap(ref.current as HTMLDivElement, {
      allowOutsideClick: true
    });

    if (isShow) trap.activate();

    return () => {
      trap.deactivate();
    };
  }, [isShow]);

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
      onMouseDown={() => setIsShow(false)}
      className={styles.modal}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <div
          onMouseDown={(event) => event.stopPropagation()}
          onKeyDown={(event) => event.stopPropagation()}
          className={classNames(
            {
              [styles.inner]: true
            },
            className
          )}
          ref={ref}
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
