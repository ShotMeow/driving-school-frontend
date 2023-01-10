import React, { FC, useState } from "react";

import styles from "./QuestionsSection.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useAdaptive } from "@/hooks/useAdaptive";
import classNames from "classnames";
import {
  data,
  Question
} from "@/components/pages/Home/QuestionsSection/QuestionsSection.data";
import Add from "@/components/other/Icons/Add";

const QuestionsSection: FC = () => {
  const { isMobile } = useAdaptive();
  const [questions, setQuestions] = useState<Question[]>(data);

  const handleOpen = (id: number) => {
    const current = [...questions];
    current.forEach((question) => {
      if (question.id === id) question.isOpen = !question.isOpen;
    });
    setQuestions(current);
  };

  return (
    <motion.section
      initial={{ translateY: "200px", opacity: 0 }}
      whileInView={{ translateY: "0px", opacity: 1 }}
      viewport={{ once: true }}
      className={styles.section}
    >
      <h2
        className={classNames({
          [styles.small]: isMobile
        })}
      >
        Ответы на вопросы
      </h2>
      <div className={styles.questions}>
        {questions.map((question) => (
          <article key={question.id}>
            <div
              onClick={() => handleOpen(question.id)}
              className={styles.heading}
            >
              <h3>{question.title}</h3>
              <button
                className={classNames({
                  [styles.rotate]: question.isOpen
                })}
              >
                <Add />
              </button>
            </div>
            <AnimatePresence>
              {question.isOpen && (
                <motion.p
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  style={{ overflow: "hidden" }}
                >
                  {question.description}
                </motion.p>
              )}
            </AnimatePresence>
          </article>
        ))}
      </div>
    </motion.section>
  );
};

export default QuestionsSection;
