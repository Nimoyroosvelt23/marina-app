import React from "react";
import styles from "./header.module.css";
// import img from 'icon/logo-kish-enjoy.png';
// import img_base from "./icon/6700291cf247dfdcdf3ae66be08f520e.jpg";
import Image from "next/image";
// import icon1 from "./icon/Expand_down.svg";
function Header() {
  return (
    <div className={styles.container}>
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
            <div className={styles.p1}>1402/02/16</div>
            <Image
              src={"/icon/Polygon 8.svg"}
              alt="GFG logo served with static path of public directory"
              height="14"
              width="14"
            />
          </div>
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
      <div className={styles.img1}>
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
              <div className={styles.div_li_header1}>
                <li className={styles.li_header1}>تفریحات دریایی</li>
                <Image
                  src={"/icon/Expand_down.svg"}
                  alt="GFG logo served with static path of public directory"
                  height="24"
                  width="24"
                />
              </div>
              <div className={styles.div_span1_3}>
                <li>
                  <span className={styles.span1}>رزرو اقامتگاه</span>
                </li>
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
      <div className={styles.asss}></div>
    </div>
  );
}

export default Header;
