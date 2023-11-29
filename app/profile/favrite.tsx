"use client";
import "react";
import Image from "next/image";
import styles from "./favrite.module.css";
export default function Favorite() {
  const favorite = [
    {
      name: "پاراسیل",
      icon1: "/icon/Star_duotone.svg",
      icon2: "/icon/Star_duotone.svg",
      icon3: "/icon/Star_duotone.svg",
      icon4: "/icon/Star_duotone.svg",
      icon5: "/icon/Star_duotone.svg",
    },
    {
      name: "پدل بورد",
      icon1: "/icon/Star_duotone.svg",
      icon2: "/icon/Star_duotone.svg",
      icon3: "/icon/Star_duotone.svg",
      icon4: "/icon/Star_duotone2.svg",
      icon5: "/icon/Star_duotone2.svg",
    },
    {
      name: "جت اسکی",
      icon1: "/icon/Star_duotone.svg",
      icon2: "/icon/Star_duotone.svg",
      icon3: "/icon/Star_duotone2.svg",
      icon4: "/icon/Star_duotone2.svg",
      icon5: "/icon/Star_duotone2.svg",
    },
    {
      name: "ویک بورد",
      icon1: "/icon/Star_duotone.svg",
      icon2: "/icon/Star_duotone.svg",
      icon3: "/icon/Star_duotone2.svg",
      icon4: "/icon/Star_duotone2.svg",
      icon5: "/icon/Star_duotone2.svg",
    },
    {
      name: "قایق تفریحی",
      icon1: "/icon/Star_duotone.svg",
      icon2: "/icon/Star_duotone.svg",
      icon3: "/icon/Star_duotone2.svg",
      icon4: "/icon/Star_duotone2.svg",
      icon5: "/icon/Star_duotone2.svg",
    },
    {
      name: "پاراسیل",
      icon1: "/icon/Star_duotone.svg",
      icon2: "/icon/Star_duotone.svg",
      icon3: "/icon/Star_duotone.svg",
      icon4: "/icon/Star_duotone.svg",
      icon5: "/icon/Star_duotone.svg",
    },
    {
      name: "پدل بورد",
      icon1: "/icon/Star_duotone.svg",
      icon2: "/icon/Star_duotone.svg",
      icon3: "/icon/Star_duotone.svg",
      icon4: "/icon/Star_duotone2.svg",
      icon5: "/icon/Star_duotone2.svg",
    },
    {
      name: "جت اسکی",
      icon1: "/icon/Star_duotone.svg",
      icon2: "/icon/Star_duotone.svg",
      icon3: "/icon/Star_duotone2.svg",
      icon4: "/icon/Star_duotone2.svg",
      icon5: "/icon/Star_duotone2.svg",
    },
    {
      name: "ویک بورد",
      icon1: "/icon/Star_duotone.svg",
      icon2: "/icon/Star_duotone.svg",
      icon3: "/icon/Star_duotone2.svg",
      icon4: "/icon/Star_duotone2.svg",
      icon5: "/icon/Star_duotone2.svg",
    },
    {
      name: "قایق تفریحی",
      icon1: "/icon/Star_duotone.svg",
      icon2: "/icon/Star_duotone.svg",
      icon3: "/icon/Star_duotone2.svg",
      icon4: "/icon/Star_duotone2.svg",
      icon5: "/icon/Star_duotone2.svg",
    },
  ];
  return (
    <>
      <div className={`animate__animated animate__fadeIn ${styles.div_left}`}>
        <div className={styles.div_left1}>
          {favorite.map((item, index) => (
            <>
              <div className={styles.div_favorite}>
                <p>{item.name}</p>
                <div className={styles.div_rate}>
                  <Image
                    alt=""
                    src={item.icon1}
                    width={16}
                    height={16}
                  />
                  <Image
                    alt=""
                    src={item.icon2}
                    width={16}
                    height={16}
                  />
                  <Image
                    alt=""
                    src={item.icon3}
                    width={16}
                    height={16}
                  />
                  <Image
                    alt=""
                    src={item.icon4}
                    width={16}
                    height={16}
                  />
                  <Image
                    alt=""
                    src={item.icon5}
                    width={16}
                    height={16}
                  />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
