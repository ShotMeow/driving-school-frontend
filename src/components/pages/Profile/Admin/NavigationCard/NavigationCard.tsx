import React, { FC } from "react";

import styles from "./NavigationCard.module.scss";
import Arrow from "@/components/other/Icons/Arrow";
import classNames from "classnames";

interface Props {
  section: 1 | 2 | 3 | 4;
  setSection: React.Dispatch<React.SetStateAction<1 | 2 | 3 | 4>>;
}

const NavigationCard: FC<Props> = ({ section, setSection }) => {
  return (
    <aside className={styles.card}>
      <h4>
        Выберите категорию <Arrow />
      </h4>
      <ul>
        <li>
          <button
            className={classNames({
              [styles.active]: section === 1
            })}
            onClick={() => setSection(1)}
          >
            Ученики
          </button>
        </li>
        <li>
          <button
            className={classNames({
              [styles.active]: section === 2
            })}
            onClick={() => setSection(2)}
          >
            Группы
          </button>
        </li>
        <li>
          <button
            className={classNames({
              [styles.active]: section === 3
            })}
            onClick={() => setSection(3)}
          >
            Инструктора
          </button>
        </li>
        <li>
          <button
            className={classNames({
              [styles.active]: section === 4
            })}
            onClick={() => setSection(4)}
          >
            Категории
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default NavigationCard;
