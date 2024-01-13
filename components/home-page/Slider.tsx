"use client";
import React, { useState } from "react";
import styles from "./slider.module.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Link from "next/link";
export default function Slider() {
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
      perView: 3,
      spacing: 15,
    },
    
    
  });

  return (
    <>
      <div className={styles.navigation_wrapper}>
        <div className={styles.div_arrow}>
        {loaded && instanceRef.current && (
          <>
            <Image
              className={styles.arrow_left}
              src="/icon/Extra Icons.svg"
              alt="item"
              width={32}
              height={32}
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            />
              <p className={styles.p__tag}>تفریحات پرطرفدار</p>
            <Image
              className={styles.arrow_right}
              src="/icon/Extra Icons1.svg"
              alt="item"
              width={32}
              height={32}
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            />
          </>
        )}
        
        </div>
        <div ref={sliderRef} className="keen-slider" style={{ gap: 10 }}>
          <div className={`keen-slider__slide ${styles.number_slide1}`}>
            <div className={styles.shadow1}>
              <Link style={{textDecoration:'none', cursor:'context-menu' }} href='/panel' className={styles.div__button}>
              <button className={styles.button1_9}>رزرو</button>
              <p className={styles.p_div_button1_4}>ویند سرف</p>
              </Link>
            </div>
          </div>
          <div className={`keen-slider__slide ${styles.number_slide2}`}>
            <div className={styles.shadow1}>
            <Link style={{textDecoration:'none', cursor:'context-menu' }} href='/panel' className={styles.div__button}>
              <button className={styles.button1_9}>رزرو</button>
              <p className={styles.p_div_button2_5}>پدل بورد</p>
              </Link>
            </div>
          </div>
          <div className={`keen-slider__slide ${styles.number_slide3}`}>
            <div className={styles.shadow1}>
            <Link style={{textDecoration:'none', cursor:'context-menu' }} href='/panel' className={styles.div__button}>
              <button className={styles.button1_9}>رزرو</button>
              <p className={styles.p_div_button3_6}>شاتل</p>
              </Link>
            </div>
          </div>
          <div className={`keen-slider__slide ${styles.number_slide4}`}>
            <div className={styles.shadow1}>
            <Link style={{textDecoration:'none', cursor:'context-menu' }} href='/panel' className={styles.div__button}>
              <button className={styles.button1_9}>رزرو</button>
              <p className={styles.p_div_button1_4}>ویند سرف</p>
              </Link>
            </div>
          </div>
          <div className={`keen-slider__slide ${styles.number_slide5}`}>
            <div className={styles.shadow1}>
            <Link style={{textDecoration:'none', cursor:'context-menu' }} href='/panel' className={styles.div__button}>
              <button className={styles.button1_9}>رزرو</button>
              <p className={styles.p_div_button2_5}>پدل بورد</p>
              </Link>
            </div>
          </div>
          <div className={`keen-slider__slide ${styles.number_slide6}`}>
            <div className={styles.shadow1}>
            <Link style={{textDecoration:'none', cursor:'context-menu' }} href='/panel' className={styles.div__button}>
              <button className={styles.button1_9}>رزرو</button>
              <p className={styles.p_div_button3_6}>شاتل</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

function Arrow(props: { left?: boolean; onClick: (e: any) => void }) {
}
