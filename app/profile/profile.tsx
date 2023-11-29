"use client"
import Image from "next/image";
import styles from "./profile.module.css";
import 'animate.css';
export default function profile() {
  return (
    <>
      <div className={`animate__animated animate__fadeIn ${styles.div_left}`}>
        <div className={styles.div_left1}>
          <div className={styles.div_left1_right}>
            <div className={styles.img1}></div>
            <div className={styles.l_r_l}>
              <p className={styles.l_r_l_p1}> !کاربر گرامی</p>
              <p>زهرا آقایی</p>
              <p>۰۹۱۲*******</p>
            </div>
          </div>
          <div className={styles.div_left_left}>
            <div className={styles.div_l_l_1}>
              <p className={styles.p_l_l_1}>رزرو امروز</p>
              <p>۰۲/۰۳/۲۵</p>
            </div>
            <div className={styles.div_l_l_1}>
              <p>: نام وسیله </p>
              <p>پاراسیل</p>
            </div>
            <div className={styles.div_l_l_1}>
              <p>: ساعت استفاده</p>
              <p>۶ دقیقه</p>
            </div>
          </div>
        </div>
        <div className={styles.div_left2}>
          <div className={styles.div_l2_1}>
            <p className={styles.p_l2_1_1}>اطلاعات حساب کاربری</p>
            <Image src="/icon/Edit.svg" alt="" width={40} height={40} />
          </div>
          <div className={styles.div_l2_2}>
            <p>نام : زهرا</p>
            <p>نام خانوداگی : آقایی</p>
          </div>
          <div className={styles.div_l2_2}>
            <p>۰۹۱۲******* :موبایل</p>
            <p> ********@gmail.com :ایمیل</p>
          </div>
          <div className={styles.div_l2_2}>
            <p>محل زندگی : تهران</p>
            <p>تاریخ تولد : ۰۰/۰۰/۰۰</p>
          </div>
        </div>
        <div className={styles.div_left3}>
          <div className={styles.div_l2_1}>
            <p className={styles.p_l2_1_1}>اطلاعات حساب بانکی</p>
            <Image src="/icon/Edit.svg" alt="" width={40} height={40} />
          </div>
          <div className={styles.div_l2_2}>
            <p>---- ---- ---- ---- : شماره حساب</p>
            <p>IR ----------------------- : شماره شبا</p>
          </div>
        </div>
      </div>
    </>
  );
}
