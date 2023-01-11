import React, { FC } from "react";
import { motion } from "framer-motion";

import styles from "./FormSection.module.scss";
import Heading from "@/components/ui/Heading/Heading";
import Input from "@/components/ui/Input/Input";
import Radio from "@/components/ui/Radio/Radio";
import LongArrow from "@/components/other/Icons/LongArrow";

const FormSection: FC = () => {
  return (
    <motion.section
      initial={{ translateY: "200px", opacity: 0 }}
      whileInView={{ translateY: "0px", opacity: 1 }}
      viewport={{ once: true }}
      className={styles.section}
    >
      <Heading>Подробная заявка на обучение</Heading>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <Input title="Имя" placeholder="Введите ваше имя" dark name="name" />
          <Input
            title="Возраст"
            type="number"
            placeholder="Введите кол-во полных лет"
            name="age"
            dark
          />
          <Input
            title="Номер телефона"
            type="tel"
            placeholder="Введите номер вашего телефона"
            dark
            name="tel"
          />
          <Input
            title="Электронная почта"
            type="email"
            placeholder="Введите вашу эл. почту"
            dark
            name="email"
          />
        </div>
        <div className={styles.buttons}>
          <div>
            <h5>Желаемые категории</h5>
            <div className={styles.category}>
              <Radio
                title="B (легковой автомобиль)"
                name="category"
                defaultValue="B"
                dark
              />
              <Radio
                title="C (грузовой автомобиль)"
                name="category"
                defaultValue="C"
                dark
              />
              <Radio
                title="CE (грузовой автомобиль с прицепом)"
                name="category"
                defaultValue="CE"
                dark
              />
              <Radio
                title="D (автобус)"
                name="category"
                defaultValue="D"
                dark
              />
            </div>
          </div>
          <div>
            <h5>Предпочитаемая группа</h5>
            <div className={styles.group}>
              <Radio
                title="Утренняя"
                name="group"
                defaultValue="morning"
                dark
              />
              <Radio title="Дневная" name="group" defaultValue="day" dark />
              <Radio
                title="Вечерняя"
                name="group"
                defaultValue="evening"
                dark
              />
            </div>
          </div>
        </div>
        <button>
          Записаться <LongArrow />
        </button>
      </form>
    </motion.section>
  );
};

export default FormSection;
