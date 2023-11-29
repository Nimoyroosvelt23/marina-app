"use client";
import "react";
import Image from "next/image";
import styles from "./question.module.css";
export default function Question() {
  return (
    <>
      <div className={`animate__animated animate__fadeIn ${styles.div_left}`}>
        <div className={styles.div_left1}>
          <p>درخواست پشتیبانی آنلاین</p>
          <div className={styles.div_input}>
            <input
              className={styles.input}
              placeholder="جستجوی راهنمای رزرو، راهنمای ثبت نام و..."
            />
            <button className={styles.button1}>جستجو</button>
          </div>
          <p>دسترسی سریع</p>
          <div className={styles.div_button}>
            <div className={styles.button2}>
                <Image alt="" src='/icon/arrow5-left.svg' width={16} height={16}/>
                <p>قوانین و مقررات عمومی</p>
            </div>
            <div className={styles.button3}>
                <Image alt="" src='/icon/arrow5-left.svg' width={16} height={16}/>
                <p>راهنمای لغو رزرو</p>
            </div>
            <div className={styles.button4}>
                <Image alt="" src='/icon/arrow5-left.svg' width={16} height={16}/>
                <p>راهنمای رزرو</p>
            </div>
            <div className={styles.button5}>
                <Image alt="" src='/icon/arrow5-left.svg' width={16} height={16}/>
                <p>پرسش های متداول</p>
            </div>
            <div className={styles.button6}>
                <Image alt="" src='/icon/arrow5-left.svg' width={16} height={16}/>
                <p>راهنمای استفاده از وسایل</p>
            </div>
            <div className={styles.button7}>
                <Image alt="" src='/icon/arrow5-left.svg' width={16} height={16}/>
                <p>راهنمای بازیابی رمز عبور</p>
            </div>
            <div className={styles.button2}>
                <Image alt="" src='/icon/arrow5-left.svg' width={16} height={16}/>
                <p>راهنمای ورود و ثبت نام</p>
            </div>
          </div>
          <p>درخواست پشتیبانی تلفنی</p>
          <p className={styles.p1}>با شماره های زیر در تماس باشید.</p>
          <div className={styles.div_p}>
            <p>۰۷۶۴۴۴۶۵۳۸۶</p>
            <p>۰۷۶۴۴۴۶۵۳۸۶</p>
            <p>۰۷۶۴۴۴۶۵۳۸۶</p>
            <p>۰۷۶۴۴۴۶۵۳۸۶</p>
          </div>
        </div>
      </div>
    </>
  );
}
