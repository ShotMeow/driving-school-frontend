import React, { FC } from "react";

import styles from "./PrimarySection.module.scss";
import Button from "@/components/ui/Button/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";

import Arrow from "@/components/other/Icons/Arrow";

import Image from "next/image";
import { useAdaptive } from "@/hooks/useAdaptive";
import { Autoplay } from "swiper";

const PrimarySection: FC = () => {
  const { isDesktop } = useAdaptive();

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
        <Button primary>
          Записаться <Arrow />
        </Button>
        {isDesktop && (
          <Image
            src="/images/car.png"
            alt="Картинка машины"
            width={1069}
            height={480}
          />
        )}
      </article>
      {isDesktop ? (
        <div className={styles.items}>
          <article>
            <Image
              src="/images/chart.png"
              alt="График"
              width={40}
              height={40}
            />
            <h4>График</h4>
            <p>Подстраивающийся под вас</p>
          </article>
          <article>
            <Image
              src="/images/fleet.png"
              alt="Автопарк"
              width={40}
              height={40}
            />
            <h4>Автопарк</h4>
            <p>Ежегодно обновляется</p>
          </article>
          <article>
            <Image
              src="/images/instructor.png"
              alt="Инструктора"
              width={40}
              height={40}
            />
            <h4>Инструктора</h4>
            <p>С опытом не менее 5 лет</p>
          </article>
          <article>
            <Image
              src="/images/discount.png"
              alt="Рассрочка и скидки"
              width={40}
              height={40}
            />
            <h4>Рассрочка и скидки</h4>
            <p>На 12 м. и скидки студентам</p>
          </article>
        </div>
      ) : (
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
              <Image
                src="/images/chart.png"
                alt="График"
                width={40}
                height={40}
              />
              <h4>График</h4>
              <p>Подстраивающийся под вас</p>
            </article>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <article>
              <Image
                src="/images/fleet.png"
                alt="Автопарк"
                width={40}
                height={40}
              />
              <h4>Автопарк</h4>
              <p>Ежегодно обновляется</p>
            </article>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <article>
              <Image
                src="/images/instructor.png"
                alt="Инструктора"
                width={40}
                height={40}
              />
              <h4>Инструктора</h4>
              <p>С опытом не менее 5 лет</p>
            </article>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <article>
              <Image
                src="/images/discount.png"
                alt="Рассрочка и скидки"
                width={40}
                height={40}
              />
              <h4>Рассрочка и скидки</h4>
              <p>На 12 м. и скидки студентам</p>
            </article>
          </SwiperSlide>
        </Swiper>
      )}
    </motion.section>
  );
};

export default PrimarySection;
