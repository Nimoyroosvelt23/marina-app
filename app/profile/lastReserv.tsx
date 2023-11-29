"use client";
import "react";
import Image from "next/image";
import styles from "./lastReserv.module.css";
export default function LastReserv() {
  const Reserve = [
    {
      name: "پاراسیل",
      price: "۶۵۴,۰۰۰",
      time: "۶ دقیقه",
      sans: "۱۷,۳۰",
      reservationDate: "۱۴۰۲,۰۳,۲۵",
      location: "ساحل مرجان",
    },
    {
      name: "پدل بورد",
      price: "۵۴۵,۰۰۰",
      time: "۶۰ دقیقه",
      sans: "۱۶,۰۰",
      reservationDate: "۱۴۰۲,۰۳,۰۱",
      location: "ساحل مرجان",
    },
    {
      name: "جت اسکی",
      price: "۱,۰۹۰,۰۰۰",
      time: "۱۵ دقیقه",
      sans: "۱۸,۱۵",
      reservationDate: "۱۴۰۲,۰۱,۲۰",
      location: "ساحل مرجان",
    },
    {
      name: "ویک بورد",
      price: "۱۹۰,۰۰۰",
      time: "۲۰ دقیقه",
      sans: "۱۷,۰۰",
      reservationDate: "۱۴۰۱,۱۱,۳۰",
      location: "ساحل مرجان",
    },
    {
      name: "قایق تفریحی",
      price: "۲,۰۰۰,۰۰۰",
      time: "۶۰ دقیقه",
      sans: "۱۷,۳۰",
      reservationDate: "۱۴۰۱,۰۹,۱۲",
      location: "ساحل مرجان",
    },
  ];

  return (
    <div className={`animate__animated animate__fadeIn ${styles.div_left}`}>
    <div className={styles.div_left2}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.tr}>
              <th className={styles.th1}>
                <div className={styles.divth}>نام وسیله</div>
              </th>
              <th className={styles.th}>قیمت</th>
              <th className={styles.th}>ساعت مجاز استفاده</th>
              <th className={styles.th4}>سانس</th>
              <th className={styles.th}>تاریخ رزرو</th>
              <th className={styles.th6}>محل برگزاری</th>
            </tr>

            {Reserve.map((item, index) => (
              <>
                <tr key={index} className={styles.tr}>
                  <td className={styles.td1}>
                    <div className={styles.divtd}>
                      {index + 1}- {""}
                      {item.name}
                    </div>
                  </td>
                  <td className={styles.td}>{item.price}</td>
                  <td className={styles.td}>{item.time}</td>
                  <td className={styles.td}>{item.sans}</td>
                  <td className={styles.td}>{item.reservationDate}</td>
                  <td className={styles.td6}>{item.location}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
