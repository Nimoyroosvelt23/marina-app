"use client";
import React, { useState } from "react";
import styles from "./slider3.module.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
export default function SliderBlog() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 4,
      spacing: 15,
    },
  });

  const [openRest, setOpenRest] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleSelectToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={styles.navigation_wrapper}
        onClick={(e) => {
          e.stopPropagation();
          setOpenRest(false);
        }}
      >
        {loaded && instanceRef.current && <></>}

        {/* </div> */}
        <Image
          className={styles.arrow_left}
          src="/icon/Arrow_right2_long.svg"
          alt="item"
          width={32}
          height={32}
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
        />
        <div
          ref={sliderRef}
          className={`keen-slider ${styles.keen_slider}`}
          style={{ gap: 10 }}
        >
          <div
            className={`keen-slider__slide ${styles.div_slide}`}
            onClick={(e) => {
              e.stopPropagation();
              setOpenRest(true);
            }}
          >
            <div className={styles.number_slide1}>
              <div className={styles.shadow1}>
                <Image src="/icon/play.svg" alt="" width={42} height={42} />
              </div>
            </div>
            <p className={styles.p_slide}>پدل بوردینگ</p>
          </div>
          <div
            className={`keen-slider__slide ${styles.div_slide}`}
            onClick={(e) => {
              e.stopPropagation();
              setOpenRest(true);}}>
            <div
              className={styles.video}
              style={
                openRest == true
                  ? { transform: "scaleY(1)" }
                  : { transform: "scaleY(0)" }
              }
            >
              <iframe src="https://www.aparat.com/video/video/embed/videohash/SlO0C/vt/frame"></iframe>
            </div>
            <div className={styles.number_slide2}style={openRest == true ? { display: "none" } : { display: "flex" }}>
              <div className={styles.shadow1}>
                <Image src="/icon/play.svg" alt="" width={42} height={42} />
              </div>
            </div>
            <p className={styles.p_slide}>قایق های تفریحی</p>
          </div>
          <div
            className={`keen-slider__slide ${styles.div_slide}`}
            onClick={(e) => {
              e.stopPropagation();
              setOpenRest(true);
            }}
          >
            <div className={styles.number_slide3}>
              <div className={styles.shadow1}>
                <Image src="/icon/play.svg" alt="" width={42} height={42} />
              </div>
            </div>
            <p className={styles.p_slide}>پدل بوردینگ</p>
          </div>
          <div
            className={`keen-slider__slide ${styles.div_slide}`}
            onClick={(e) => {
              e.stopPropagation();
              setOpenRest(true);
            }}
          >
            <div className={styles.number_slide4}>
              <div className={styles.shadow1}>
                <Image src="/icon/play.svg" alt="" width={42} height={42} />
              </div>
            </div>
            <p className={styles.p_slide}>ایونت ها</p>
          </div>
          <div
            className={`keen-slider__slide ${styles.div_slide}`}
            onClick={(e) => {
              e.stopPropagation();
              setOpenRest(true);
            }}
          >
            {" "}
            <div className={styles.number_slide5}>
              <div className={styles.shadow1}>
                <Image src="/icon/play.svg" alt="" width={42} height={42} />
              </div>
            </div>
            <p className={styles.p_slide}>معرفی مارینا</p>
          </div>
          <div
            className={`keen-slider__slide ${styles.div_slide}`}
            onClick={(e) => {
              e.stopPropagation();
              setOpenRest(true);
            }}
          >
            <div className={styles.number_slide6}>
              <div className={styles.shadow1}>
                <Image src="/icon/play.svg" alt="" width={42} height={42} />
              </div>
            </div>
            <p className={styles.p_slide}>پدل بوردینگ</p>
          </div>
        </div>
        <Image
          className={styles.arrow_right}
          src="/icon/Arrow_right2_long.svg"
          alt="item"
          width={32}
          height={32}
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
        />
      </div>
    </>
  );
}

function Arrow(props: { left?: boolean; onClick: (e: any) => void }) {
  return (
    <svg
      onClick={props.onClick}
      className={`${styles.arrow} ${
        props.left ? styles.arrow_left : styles.arrow_right
      }
      } `}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
