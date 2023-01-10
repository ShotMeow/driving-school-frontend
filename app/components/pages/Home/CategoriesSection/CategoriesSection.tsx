import React, { FC } from "react";

import styles from "./CategoriesSection.module.scss";
import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import Arrow from "@/components/other/Icons/Arrow";
import { useAdaptive } from "@/hooks/useAdaptive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import classNames from "classnames";

const CategoriesSection: FC = () => {
  const { isDesktop } = useAdaptive();

  return (
    <section className={styles.section}>
      <h2
        className={classNames({
          [styles.small]: !isDesktop
        })}
      >
        Выберите категорию
      </h2>
      {isDesktop ? (
        <div className={styles.categories}>
          <article>
            <h3>
              Категория <span>B</span>
            </h3>
            <Image
              src="/images/category_car_b.jpg"
              alt="Машина категории B"
              width={433}
              height={142}
            />
            <ul>
              <li>
                <Image
                  src="/images/price.png"
                  alt="Иконка цены"
                  width={30}
                  height={30}
                />
                <span className={styles.heading}>23 400 ₽</span>
                <span>с учётом топлива</span>
              </li>
              <li>
                <Image
                  src="/images/theory.png"
                  alt="Иконка теории"
                  width={30}
                  height={30}
                />
                <span className={styles.heading}>Теория</span>
                <span>- 2 месяца</span>
              </li>
              <li>
                <Image
                  src="/images/practice.png"
                  alt="Иконка практики"
                  width={30}
                  height={30}
                />
                <span className={styles.heading}>Практика</span>
                <span>- 1.5 месяца</span>
              </li>
            </ul>
            <Button primary>
              Записаться <Arrow />
            </Button>
          </article>
          <article>
            <h3>
              Категория <span>C</span>
            </h3>
            <Image
              src="/images/category_car_c.jpg"
              alt="Машина категории C"
              width={426}
              height={185}
            />
            <ul>
              <li>
                <Image
                  src="/images/price.png"
                  alt="Иконка цены"
                  width={30}
                  height={30}
                />
                <span className={styles.heading}>33 500 ₽</span>
                <span>с учётом топлива</span>
              </li>
              <li>
                <Image
                  src="/images/theory.png"
                  alt="Иконка теории"
                  width={30}
                  height={30}
                />
                <span className={styles.heading}>Теория</span>
                <span>- 3 месяца</span>
              </li>
              <li>
                <Image
                  src="/images/practice.png"
                  alt="Иконка практики"
                  width={30}
                  height={30}
                />
                <span className={styles.heading}>Практика</span>
                <span>- 2 месяца</span>
              </li>
            </ul>
            <Button primary>
              Записаться <Arrow />
            </Button>
          </article>
          <article>
            <h3>
              Категория <span>CE</span>
            </h3>
            <Image
              src="/images/category_car_ce.jpg"
              alt="Машина категории CE"
              width={545}
              height={168}
            />
            <ul>
              <li>
                <Image
                  src="/images/price.png"
                  alt="Иконка цены"
                  width={30}
                  height={30}
                />
                <span className={styles.heading}>45 000 ₽</span>
                <span>с учётом топлива</span>
              </li>
              <li>
                <Image
                  src="/images/theory.png"
                  alt="Иконка теории"
                  width={30}
                  height={30}
                />
                <span className={styles.heading}>Теория</span>
                <span>- 3 месяца</span>
              </li>
              <li>
                <Image
                  src="/images/practice.png"
                  alt="Иконка практики"
                  width={30}
                  height={30}
                />
                <span className={styles.heading}>Практика</span>
                <span>- 2.5 месяца</span>
              </li>
            </ul>
            <Button primary>
              Записаться <Arrow />
            </Button>
          </article>
          <article>
            <h3>
              Категория <span>D</span>
            </h3>
            <Image
              src="/images/category_car_d.jpg"
              alt="Машина категории D"
              width={450}
              height={166}
            />
            <ul>
              <li>
                <Image
                  src="/images/price.png"
                  alt="Иконка цены"
                  width={30}
                  height={30}
                />
                <span className={styles.heading}>26 000 ₽</span>
                <span>с учётом топлива</span>
              </li>
              <li>
                <Image
                  src="/images/theory.png"
                  alt="Иконка теории"
                  width={30}
                  height={30}
                />
                <span className={styles.heading}>Теория</span>
                <span>- 3 месяца</span>
              </li>
              <li>
                <Image
                  src="/images/practice.png"
                  alt="Иконка практики"
                  width={30}
                  height={30}
                />
                <span className={styles.heading}>Практика</span>
                <span>- 2.5 месяца</span>
              </li>
            </ul>
            <Button primary>
              Записаться <Arrow />
            </Button>
          </article>
        </div>
      ) : (
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true
          }}
          modules={[Autoplay]}
          className={styles.swiper}
        >
          <SwiperSlide className={styles.slide}>
            <article>
              <h3>
                Категория <span>B</span>
              </h3>
              <Image
                src="/images/category_car_b.jpg"
                alt="Машина категории B"
                width={433}
                height={142}
              />
              <ul>
                <li>
                  <Image
                    src="/images/price.png"
                    alt="Иконка цены"
                    width={30}
                    height={30}
                  />
                  <span className={styles.heading}>23 400 ₽</span>
                  <span>с учётом топлива</span>
                </li>
                <li>
                  <Image
                    src="/images/theory.png"
                    alt="Иконка теории"
                    width={30}
                    height={30}
                  />
                  <span className={styles.heading}>Теория</span>
                  <span>- 2 месяца</span>
                </li>
                <li>
                  <Image
                    src="/images/practice.png"
                    alt="Иконка практики"
                    width={30}
                    height={30}
                  />
                  <span className={styles.heading}>Практика</span>
                  <span>- 1.5 месяца</span>
                </li>
              </ul>
              <Button primary>
                Записаться <Arrow />
              </Button>
            </article>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <article>
              <h3>
                Категория <span>C</span>
              </h3>
              <Image
                src="/images/category_car_c.jpg"
                alt="Машина категории C"
                width={426}
                height={185}
              />
              <ul>
                <li>
                  <Image
                    src="/images/price.png"
                    alt="Иконка цены"
                    width={30}
                    height={30}
                  />
                  <span className={styles.heading}>33 500 ₽</span>
                  <span>с учётом топлива</span>
                </li>
                <li>
                  <Image
                    src="/images/theory.png"
                    alt="Иконка теории"
                    width={30}
                    height={30}
                  />
                  <span className={styles.heading}>Теория</span>
                  <span>- 3 месяца</span>
                </li>
                <li>
                  <Image
                    src="/images/practice.png"
                    alt="Иконка практики"
                    width={30}
                    height={30}
                  />
                  <span className={styles.heading}>Практика</span>
                  <span>- 2 месяца</span>
                </li>
              </ul>
              <Button primary>
                Записаться <Arrow />
              </Button>
            </article>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <article>
              <h3>
                Категория <span>CE</span>
              </h3>
              <Image
                src="/images/category_car_ce.jpg"
                alt="Машина категории CE"
                width={545}
                height={168}
              />
              <ul>
                <li>
                  <Image
                    src="/images/price.png"
                    alt="Иконка цены"
                    width={30}
                    height={30}
                  />
                  <span className={styles.heading}>45 000 ₽</span>
                  <span>с учётом топлива</span>
                </li>
                <li>
                  <Image
                    src="/images/theory.png"
                    alt="Иконка теории"
                    width={30}
                    height={30}
                  />
                  <span className={styles.heading}>Теория</span>
                  <span>- 3 месяца</span>
                </li>
                <li>
                  <Image
                    src="/images/practice.png"
                    alt="Иконка практики"
                    width={30}
                    height={30}
                  />
                  <span className={styles.heading}>Практика</span>
                  <span>- 2.5 месяца</span>
                </li>
              </ul>
              <Button primary>
                Записаться <Arrow />
              </Button>
            </article>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <article>
              <h3>
                Категория <span>D</span>
              </h3>
              <Image
                src="/images/category_car_d.jpg"
                alt="Машина категории D"
                width={450}
                height={166}
              />
              <ul>
                <li>
                  <Image
                    src="/images/price.png"
                    alt="Иконка цены"
                    width={30}
                    height={30}
                  />
                  <span className={styles.heading}>26 000 ₽</span>
                  <span>с учётом топлива</span>
                </li>
                <li>
                  <Image
                    src="/images/theory.png"
                    alt="Иконка теории"
                    width={30}
                    height={30}
                  />
                  <span className={styles.heading}>Теория</span>
                  <span>- 3 месяца</span>
                </li>
                <li>
                  <Image
                    src="/images/practice.png"
                    alt="Иконка практики"
                    width={30}
                    height={30}
                  />
                  <span className={styles.heading}>Практика</span>
                  <span>- 2.5 месяца</span>
                </li>
              </ul>
              <Button primary>
                Записаться <Arrow />
              </Button>
            </article>
          </SwiperSlide>
        </Swiper>
      )}
    </section>
  );
};

export default CategoriesSection;
