"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./centerBlog.module.css";
import SliderBlog from "./sliderBlog";
function CenterBlog() {
  const [openRest, setOpenRest] = useState(false);
  
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={styles.base_hr}>
        <div className={styles.divhr5}>
          <div className={styles.divhr3}>
            <div className={styles.hr3}></div>
            <span className={styles.point3}></span>
          </div>
          <p className={styles.phr3}>جدیدترین ها</p>
        </div>
      </div>
      <div className={styles.div1_img}>
        <div className={styles.img1}>
          <div className={styles.div_circle}>
            <Image
              src="/icon/Arrow_right_long.svg"
              alt=""
              width={46}
              height={46}
            />
          </div>
          <p className={styles.p}>هیجان با پاراسیل</p>
        </div>
        <div className={styles.img2}>
          <div className={styles.div_circle}>
            <Image
              src="/icon/Arrow_right_long.svg"
              alt=""
              width={46}
              height={46}
            />
          </div>
          <p className={styles.p}>ساحل مرجان؛ یکی از جذاب ترین دیدنی های کیش</p>
        </div>
      </div>
      <div className={styles.div1_img}>
        <div className={styles.img3}>
          <div className={styles.div_circle}>
            <Image
              src="/icon/Arrow_right_long.svg"
              alt=""
              width={46}
              height={46}
            />
          </div>
          <p className={styles.p}> مارینا کجاست؟</p>
        </div>
        <div className={styles.img4}>
          <div className={styles.div_circle}>
            <Image
              src="/icon/Arrow_right_long.svg"
              alt=""
              width={46}
              height={46}
            />
          </div>
          <p className={styles.p}>بهترین قایق های لوکس دریایی</p>
        </div>
        <div className={styles.img5}>
          <div className={styles.div_circle}>
            <Image
              src="/icon/Arrow_right_long.svg"
              alt=""
              width={46}
              height={46}
            />
          </div>
          <p className={styles.p}>پدل بورد اختصاصی مارینا</p>
        </div>
      </div>
      <div className={styles.base_hr}>
        <div className={styles.divhr5}>
          <div className={styles.divhr3}>
            <div className={styles.hr3}></div>
            <span className={styles.point3}></span>
          </div>
          <p className={styles.phr3}>هواشناسی</p>
        </div>
      </div>
      <div className={styles.div1_img}>
        <div className={styles.weather}>
          <div className={styles.weather1}>
            <div className={styles.up1_weather}>
                <Image src="/icon/Sunny.svg" alt="" width={80} height={80}/>
                <div className={styles.center_weather}>
                <p>آفتابی</p>
                <p>رطوبت : ۶۶%</p>
                <p>بارش : ۱۰%</p>
            </div>
                <p>۳۷</p>
            </div>
            <p className={styles.p1_weather}>دوشنبه، ۱ خرداد ۱۴۰۲</p>
          </div>
          <div className={styles.down_weather}>
          وضعیت آب و هوا در هفته اول خردادماه
          </div>
        </div>
        <div className={styles.weather}>
          <div className={styles.weather2}>
            <div className={styles.up_weather}>
            <Image src="/icon/Sunny.svg" alt="" width={80} height={80}/>
                <p>۳۷</p>
            </div>
            <div className={styles.center_weather}>
                <p>آفتابی</p>
                <p>رطوبت : ۶۶%</p>
                <p>بارش : ۱۰%</p>
            </div>
            <p className={styles.p_weather}>دوشنبه، ۷ خرداد ۱۴۰۲</p>
          </div>
          <div className={styles.down_weather}>
          وضعیت آب و هوا در هفته دوم خردادماه
          </div>
        </div>
        <div className={styles.weather}>
          <div className={styles.weather3}>
            <div className={styles.up_weather}>
            <Image src="/icon/Partly-cloudy.svg" alt="" width={80} height={80}/>
                <p style={{color:'var(--black, #393939)'}}>۳۷</p>
            </div>
            <div className={styles.center3_weather}>
                <p>نیمه ابری</p>
                <p>رطوبت : ۶۸%</p>
                <p>بارش : ۱۱%</p>
            </div>
            <p className={styles.p3_weather}>دوشنبه، ۱۴ خرداد ۱۴۰۲</p>
          </div>
          <div className={styles.down_weather}>
          وضعیت آب و هوا در هفته سوم خردادماه
          </div>
        </div>
      </div>
      <div className={styles.base_hr}>
        <div className={styles.divhr5}>
          <div className={styles.divhr3}>
            <div className={styles.hr3}></div>
            <span className={styles.point3}></span>
          </div>
          <p className={styles.phr3}>جدیدترین ویدئوها</p>
        </div>
      </div>
      <div className={styles.div2_img}
      >
        <SliderBlog/>
      </div>
    </>
  );
}

export default CenterBlog;
