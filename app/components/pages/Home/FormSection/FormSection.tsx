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
      initial={{ translateX: "-200px", opacity: 0 }}
      whileInView={{ translateX: "0px", opacity: 1 }}
      viewport={{ once: true }}
      className={styles.section}
      id="form"
    >
      <Heading>Подробная заявка на обучение</Heading>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <Input
            required
            title="Имя"
            placeholder="Введите ваше имя"
            dark
            name="name"
          />
          <Input
            required
            title="Возраст"
            type="number"
            placeholder="Введите кол-во полных лет"
            name="age"
            dark
          />
          <Input
            required
            title="Номер телефона"
            type="tel"
            placeholder="Введите номер вашего телефона"
            dark
            name="tel"
          />
          <Input
            required
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
                required
                title="B (легковой автомобиль)"
                name="category"
                defaultValue="B"
                dark
              />
              <Radio
                required
                title="C (грузовой автомобиль)"
                name="category"
                defaultValue="C"
                dark
              />
              <Radio
                required
                title="CE (грузовой автомобиль с прицепом)"
                name="category"
                defaultValue="CE"
                dark
              />
              <Radio
                required
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
                required
                title="Утренняя"
                name="group"
                defaultValue="morning"
                dark
              />
              <Radio
                required
                title="Дневная"
                name="group"
                defaultValue="day"
                dark
              />
              <Radio
                required
                title="Вечерняя"
                name="group"
                defaultValue="evening"
                dark
              />
            </div>
          </div>
        </div>
        <button className={styles.submit}>
          Записаться <LongArrow />
        </button>
      </form>
    </motion.section>
  );
};

export default FormSection;
