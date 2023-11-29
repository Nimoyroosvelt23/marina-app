"use client";
import "react";
import Image from "next/image";
import styles from "./transaction.module.css";
import Example from "./linechart";
import Chart from "./linechart";
import LineChart from "./linechart";
export default function Transaction() {
  const Transactions = [
    {
      date: "خرداد / ۱۴۰۲",
      price: "۳,۶۵۰,۰۰۰",
      number: "۴",
    },
    {
      date: "اردیبهشت / ۱۴۰۲",
      price: "۴,۸۲۰,۰۰۰",
      number: "۶",
    },
    {
      date: "خرداد / ۱۴۰۲",
      price: "۳,۶۵۰,۰۰۰",
      number: "۴",
    },
    {
      date: "خرداد / ۱۴۰۲",
      price: "۳,۶۵۰,۰۰۰",
      number: "۴",
    },
    {
      date: "خرداد / ۱۴۰۲",
      price: "۳,۶۵۰,۰۰۰",
      number: "۴",
    },
    {
      date: "خرداد / ۱۴۰۲",
      price: "۳,۶۵۰,۰۰۰",
      number: "۴",
    },
    {
      date: "خرداد / ۱۴۰۲",
      price: "۳,۶۵۰,۰۰۰",
      number: "۴",
    },
    {
      date: "خرداد / ۱۴۰۲",
      price: "۳,۶۵۰,۰۰۰",
      number: "۴",
    },
    {
      date: "خرداد / ۱۴۰۲",
      price: "۳,۶۵۰,۰۰۰",
      number: "۴",
    },
    {
      date: "خرداد / ۱۴۰۲",
      price: "۳,۶۵۰,۰۰۰",
      number: "۴",
    },
    {
      date: "خرداد / ۱۴۰۲",
      price: "۳,۶۵۰,۰۰۰",
      number: "۴",
    },
    {
      date: "خرداد / ۱۴۰۲",
      price: "۳,۶۵۰,۰۰۰",
      number: "۴",
    },
    {
      date: "خرداد / ۱۴۰۲",
      price: "۳,۶۵۰,۰۰۰",
      number: "۴",
    },
  ];
  return (
    <>
      <div className={`animate__animated animate__fadeIn ${styles.div_left}`}>
        <div className={styles.div_left1}>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.tr}>
                <th className={styles.th}>ماه/سال</th>
                <th className={styles.th}>مقدار قابل پرداخت</th>
                <th className={styles.th3}>تعداد رزرو ها</th>
              </tr>

              {Transactions.map((item, index) => (
                <>
                  <tr key={index} className={styles.tr}>
                    <td className={styles.td}>{item.date}</td>
                    <td className={styles.td}>{item.price}</td>
                    <td className={styles.td6}>{item.number}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        <LineChart/>
      </div>
    </>
  );
}
