"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./blog.module.css";
import Link from "next/link";
function HederBlog() {
  const [openRest, setOpenRest] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleSelectToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={styles.header}
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
        <Link style={{ textDecoration: "none" }} href="/entertainmentlist">
          <div className={styles.div1_bang}>تفریحات تک نفره</div>
          <div className={styles.div1_bang}>تفریحات دو نفره</div>
          <div className={styles.div1_bang}>تفریحات گروهی</div>
          <div className={styles.div1_bang}>کشتی های VIP</div>
          <div className={styles.div5_bang}>پارک آبی اوشن</div>
        </Link>
      </div>
      <ul className={styles.item_header}>
        <div className={styles.right_header}>
          <Link href="/">
            <li>
              {" "}
              <Image
                src={"/icon/logo-kish-enjoy 1.svg"}
                alt="GFG logo served with static path of public directory"
                height="52"
                width="87"
              />
            </li>
          </Link>
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
            <Link
              style={{ textDecoration: "none", color: "#222222" }}
              href="/contact"
            >
              <li className={styles.span1}> تماس با ما</li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#222222" }}
              href="/blog"
            >
              <li className={styles.span1}> بلاگ</li>
            </Link>
          </div>
        </div>
        <div className={styles.left_header}>
          <Image
            src={"/icon/Search.svg"}
            alt="GFG logo served with static path of public directory"
            height="24"
            width="24"
          />
          <Link href="/card">
            <Image
              src={"/icon/File_dock.svg"}
              alt="GFG logo served with static path of public directory"
              height="24"
              width="24"
            />
          </Link>
          <Link href="/profile">
            <Image
              src={"/icon/User_alt_light.svg"}
              alt="GFG logo served with static path of public directory"
              height="24"
              width="24"
            />
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default HederBlog;
