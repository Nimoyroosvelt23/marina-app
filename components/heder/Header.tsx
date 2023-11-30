"use client";
import React, { useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import "animate.css";
function Header() {
  const [openRest, setOpenRest] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleSelectToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.glass_box}>
        <h2 className={styles.h2_1}>بگرد، انتخاب کن، لذت ببر</h2>
        <div className={styles.p_glassbox}>
          <div className={styles.div_p}>
            <p>تاریخ</p>
            <p>نفرات</p>
            <p>دسته بندی ها</p>
          </div>
        </div>
        <div className={styles.down}>
          <div className={styles.select1}>
            <p className={styles.p1}>1402/02/16</p>
            <Image
              src={"/icon/Polygon 8.svg"}
              alt="GFG logo served with static path of public directory"
              height="14"
              width="14"
            />
          </div>
          {/* <div className={styles.select1}>
        <div
          className={`${styles.select} ${isOpen ? styles.open : ''}`}
          onClick={handleSelectToggle}
        >
          <span>Select an option
          <Image
              src={"/icon/Polygon 8.svg"}
              alt="GFG logo served with static path of public directory"
              height="14"
              width="14"
            />
          </span>
          <div className={styles.options}>
            <div className={styles.option}>Option 1</div>
            <div className={styles.option}>Option 2</div>
            <div className={styles.option}>Option 3</div>
            <div className={styles.option}>Option 4</div>
          </div>
        </div>
      </div> */}
          <div className={styles.select1}>
            <div className={styles.p1}> 4 نفر</div>
            <Image
              src={"/icon/Polygon 8.svg"}
              alt="GFG logo served with static path of public directory"
              height="14"
              width="14"
            />
          </div>
          <div className={styles.select3}>
            <div className={styles.p1}>تفریحات گروهی، بنانا</div>
            <Image
              src={"/icon/Polygon 8.svg"}
              alt="GFG logo served with static path of public directory"
              height="14"
              width="14"
            />
          </div>
          <button className={styles.button}>رزرو</button>
        </div>
      </div>
      <div
        className={styles.img1}
        onClick={(e) => {
          e.stopPropagation();
          setOpenRest(false);
        }}
      >
        <div
          className={` ${styles.bang}`}
          style={
            openRest == true
              ? { transform: "scaleY(1)" }
              : { transform: "scaleY(0)" }
          }
        >
          <p className={styles.p1_bang}>تفریحات دریایی</p>
          <div className={styles.div1_bang}>تفریحات تک نفره</div>
          <div className={styles.div1_bang}>تفریحات دو نفره</div>
          <div className={styles.div1_bang}>تفریحات گروهی</div>
          <div className={styles.div1_bang}>کشتی های VIP</div>
          <div className={styles.div5_bang}>پارک آبی اوشن</div>
        </div>
        <div className={styles.header}>
          <ul className={styles.item_header}>
            <div className={styles.right_header}>
              <li>
                {" "}
                <Image
                  src={"/icon/logo-kish-enjoy 1.svg"}
                  alt="GFG logo served with static path of public directory"
                  height="52"
                  width="87"
                />
              </li>
              <div
                className={styles.div_li_header1}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenRest(true);
                }}
              >
                <li className={styles.li_header1}>تفریحات دریایی</li>
                <Image
                  src={"/icon/Expand_down.svg"}
                  alt="GFG logo served with static path of public directory"
                  height="24"
                  width="24"
                />
              </div>

              <div className={styles.div_span1_3}>
                <li>رزرو اقامتگاه</li>
                <li className={styles.span1}> تماس با ما</li>
                <li className={styles.span1}> بلاگ</li>
              </div>
            </div>
            <div className={styles.left_header}>
              <Image
                src={"/icon/Search.svg"}
                alt="GFG logo served with static path of public directory"
                height="24"
                width="24"
              />
              <Image
                src={"/icon/File_dock.svg"}
                alt="GFG logo served with static path of public directory"
                height="24"
                width="24"
              />
              <Image
                src={"/icon/User_alt_light.svg"}
                alt="GFG logo served with static path of public directory"
                height="24"
                width="24"
              />
            </div>
          </ul>
        </div>
        <h1 className={styles.h1}>خلق خاطره‌های بی‌نظیر</h1>
        <h2 className={styles.h2}>لحظاتی از آرامش در برابر امواج</h2>
      </div>
    </>
  );
}

export default Header;
