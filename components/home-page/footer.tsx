import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import ax1 from "/app/image/1.png";
import ax2 from "/app/image/2png.png";
import ax3 from "/app/image/3.png";
import ax4 from "/app/image/4.png";
import ax5 from "/app/image/5.png";
import ax6 from "/app//image/6.png";
import facebook from "/app/image/facebook.png";
import insta from "/app/image/insta.png";
import ngo from "/app/image/ngo.png";
import ngo2 from "/app/image/ngo2.png";
import ngo3 from "/app/image/ngo3.png";
import t from "/app/image/twiyer.png";
import keshti from "/app/image/kish.png";
import Link from "next/link";
function footer() {
  return (
    <>
      <div className={styles.end}>
        <Image
          className={styles.img1}
          alt=""
          src={keshti}
          height="91"
          width="176"
        />
        <p className={styles.pain}>
          مارینا کیش تخصصی ترین و متنوع ترین ارائه دهنده کالا و تجهیزات دریایی
          در کشور عزیزمان می باشد. از این رو به عنوان نماینده انحصاری کمپانی های
          معتبری همچون، ژانو، ردپدل، ویبیت، هوبی کت و بسیاری از تجهیزات دریایی
          دیگر، تخصصی ترین فروشگاه های دریایی با طیف متنوعی از محصولات و تجهیزات
          را دارا می باشد.
        </p>

        <div className="bilder">
          <Image alt="" src={ax6} width="90" height="42" />
          <Image alt="" src={ax5} width="90" height="42" />
          <Image alt="" src={ax4} width="90" height="42" />
          <Image alt="" src={ax3} width="90" height="42" />
          <Image alt="" src={ax2} width="90" height="42" />
          <Image alt="" src={ax1} width="90" height="42" />
        </div>
      </div>
      <div className={styles.darakhar}>
        <div className={styles.divtah}>
          <div></div>
          <div className={styles.divd1}>
            <Link
              style={{ textDecoration: "none", color: "#7b808c" }}
              href="/entertainmentlist"
            >
              <h4 className={styles.kie}>تفریحات دریایی</h4>
            </Link>
          </div>
          <span></span>
          <div className={styles.divd2}>
            <h4 className={styles.kie}>رزرو اقامتگاه</h4>
          </div>
          <span></span>
          <div className={styles.divd3}>
            <Link
              style={{ textDecoration: "none", color: "#7b808c" }}
              href="/contact"
            >
              <h4 className={styles.kie}>تماس با ما</h4>
            </Link>
          </div>
          <Link
            style={{ textDecoration: "none", color: "#7b808c" }}
            href="/blog"
          >
            <h4 className={styles.kie}>بلاگ</h4>
          </Link>
        </div>

        <div className={styles.rast}>
          <Image alt="hhhhhh" src={ngo3} width="46" height="42" />
          <Image alt="hhhhhh" src={ngo2} width="30" height="44" />
          <Image alt="hhhhhh" src={ngo} width="54" height="46" />
          <Image alt="hhhhhh" src={insta} width="20" height="20" />
          <Image alt="hhhhhh" src={facebook} width="20" height="20" />
          <Image alt="hhhhhh" src={t} width="20" height="20" />
        </div>
      </div>
    </>
  );
}

export default footer;
