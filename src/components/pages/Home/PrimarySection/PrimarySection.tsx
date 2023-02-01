import React, { FC } from "react";

import styles from "./PrimarySection.module.scss";
import Button from "../../../UI/Button/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";

import Arrow from "../../../other/Icons/Arrow";

import Image from "next/image";
import { Autoplay } from "swiper";
import Link from "next/link";

import car from "/src/images/oversize/car.png";
import chart from "/src/images/icons/chart.png";
import fleet from "/src/images/icons/fleet.png";
import instructor from "/src/images/icons/instructor.png";
import discount from "/src/images/icons/discount.png";

const PrimarySection: FC = () => {
  return (
    <motion.section
      initial={{ translateY: "200px", opacity: 0 }}
      whileInView={{ translateY: "0px", opacity: 1 }}
      viewport={{ once: true }}
      className={styles.section}
    >
      <article className={styles.majorArticle}>
        <h1>Научитесь водить уже через 3 месяца</h1>
        <p>
          Научитесь водить уже через 3 месяца. Предостовляем высококачественные
          уроки вождения с 2000 года и выпускаем более 450 студентов в месяц.
        </p>
        <Link href="/#form" scroll={false}>
          <Button primary>
            Записаться <Arrow />
          </Button>
        </Link>
        <Image src={car} alt="Картинка машины" />
      </article>
      <div className={styles.items}>
        <article>
          <Image src={chart} alt="График" />
          <h4>График</h4>
          <p>Подстраивающийся под вас</p>
        </article>
        <article>
          <Image src={fleet} alt="Автопарк" />
          <h4>Автопарк</h4>
          <p>Ежегодно обновляется</p>
        </article>
        <article>
          <Image src={instructor} alt="Инструктора" />
          <h4>Инструктора</h4>
          <p>С опытом не менее 5 лет</p>
        </article>
        <article>
          <Image src={discount} alt="Рассрочка и скидки" />
          <h4>Рассрочка и скидки</h4>
          <p>На 12 м. и скидки студентам</p>
        </article>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true
        }}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}>
          <article>
            <Image src={chart} alt="График" />
            <h4>График</h4>
            <p>Подстраивающийся под вас</p>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <Image src={fleet} alt="Автопарк" />
            <h4>Автопарк</h4>
            <p>Ежегодно обновляется</p>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <Image src={instructor} alt="Инструктора" />
            <h4>Инструктора</h4>
            <p>С опытом не менее 5 лет</p>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <Image src={discount} alt="Рассрочка и скидки" />
            <h4>Рассрочка и скидки</h4>
            <p>На 12 м. и скидки студентам</p>
          </article>
        </SwiperSlide>
      </Swiper>
    </motion.section>
  );
};

export default PrimarySection;
