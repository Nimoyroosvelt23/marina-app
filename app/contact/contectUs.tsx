"use client";
import React from "react";
import Image from "next/image";
import styles from "./contect.module.css";
function ContectUs() {
  return (
    <>
      <div className={styles.base_hr}>
        <div className={styles.divhr4}>
          <div className={styles.divhr2}>
            <div className={styles.hr3}></div>
            <span className={styles.point3}></span>
          </div>
          <p className={styles.phr3}>تماس با ما</p>
        </div>
      </div>
      <div className={styles.div_base_contect}>
        <div className={styles.map_img}></div>
        <div className={styles.div_contect}>
          <p className={styles.p_contect}>
            شما میتوانید در این قسمت با ما در تماس باشید
          </p>
          <div className={styles.contect1}>
            <div className={styles.div_input1}>
              <p className={styles.p_input}>نام و نام خانوادگی</p>
              <input
                className={styles.input}
                placeholder="مثال: کوروش هخامنشی"
              ></input>
            </div>
            <div className={styles.div_input1}>
              <p className={styles.p_input}>ایمیل</p>
              <input
                className={styles.input}
                placeholder="مثال: persian@gmail.com "
              ></input>
            </div>
          </div>
          <div className={styles.contect2}>
            <p className={styles.p1}>پیام های خود را در اینجا بنویسید </p>
            <textarea className={styles.input2}></textarea>
          </div>
          <button className={styles.button1}>ثبت تماس</button>
        </div>
      </div>
      <div className={styles.div_base_contect2}>
        <div className={styles.div_phone}>
          <div className={styles.div_circle}>
            <Image src="/icon/Calling.svg" alt="" width={24} height={24} />
          </div>
          <p>۰۹۸۱۰۲۰۲۰۲۰ : شماره تلفن</p>
        </div>
        <div className={styles.div_phone3}>
          <div className={styles.div_circle}>
            <Image src="/icon/Message.svg" alt="" width={24} height={24} />
          </div>
          <p>marinakish@gmail.com : ایمیل</p>
        </div>
        <div className={styles.div_phone}>
          <div className={styles.div_circle}>
            <Image src="/icon/Location.svg" alt="" width={24} height={24} />
          </div>
          <p>آدرس : کیش، ساحل مرجان</p>
        </div>
      </div>
      <div className={styles.divhr5}>
        <div className={styles.divhr3}>
          <div className={styles.hr3}></div>
          <span className={styles.point3}></span>
        </div>
        <p className={styles.phr3}>برندهای ما</p>
        <div className={styles.divhr3}>
          <span className={styles.point4}></span>
          <div className={styles.hr3}></div>
        </div>
      </div>
      <div className={styles.div_brand}>
        <div className={styles.img_brand1}></div>
        <div className={styles.img_brand2}></div>
        <div className={styles.img_brand3}></div>
        <div className={styles.img_brand4}></div>
        <div className={styles.img_brand5}></div>
      </div>
      <div className={styles.base_hr}>
        <div className={styles.divhr4}>
          <div className={styles.divhr2}>
            <div className={styles.hr3}></div>
            <span className={styles.point3}></span>
          </div>
          <p className={styles.phr3}>مارینا کیش، بهترین کلوپ جزیره کیش!</p>
        </div>
      </div>
      <div className={styles.div_base_marina}>
        <div className={styles.div_p}>
          <p className={styles.p_marina}>
            جزیره زیبای کیش، جزیره ای مرجانی در میان آبهای نیلگون خلیج فارس یکی
            از مهمترین مقاصد گردشگری ایران می باشد. مراکز خرید متنوع، تفریحات
            هیجان انگیز دریایی، رستورانها، سواحل و تفرج گاهای ساحلی همه و همه از
            مهمترین جاذبه های گردشگری در جزیره کیش می باشد.
          </p>
          <p className={styles.p_marina}>
            یکی از بهترین فعالیتهایی که در هنگام سفر به جزیره کیش میتوانید انجام
            دهید، تفریحات دریایی می باشد.برای انجام تفریحات دریایی باید به کلوپ
            های تفریحات دریایی در سرتاسر جزیره سر بزنید. اما معمولا گردشگران از
            کانتر های بلیط فروشی سطح جزیره یا وبسایتها اقدام به خرید بلیط
            تفریحات میکنند. در این روش گردشگران از ویژگی ها و امکانات و سطح کیفی
            کلوپ مورد نظر چندان مطلع نخواهند بود و فقط با دیدن چند عکس هیجان
            انگیز اقدام به خرید بلیط میکنند.
          </p>
          <p className={styles.p_marina}>
            حال اگر واقعا بدنبال بهترین کلوپ تفریحات دریایی جزیره کیش میگردید تا
            بتوانید تمامی تفریحات را در یک مجموعه بزرگ و با امکانات رفاهی بی
            نظیر و محیطی خانوادگی انجام دهید، باید بدنبال مجموعه ای باشید که
            علاوه بر فضای محیطی بسیار بزرگ و پر از امکانات ، تجهیزات نو و ایمن
            داشته باشند.داشتن تجهیزات تفریحات دریایی به تنهایی نمی تواند تضمین
            کننده کیفیت کلوپ باشد. داشتن پرسنل کاملا حرفه ای و خوش برخورد، فضای
            خانوادگی و مناسب برای تفریحات جمعی، وجود اسکله های اختصاصی برای
            سرویس دهی حرفه ای به مسافران در کنار داشتن غرفه های متعدد غذا و
            نوشیدنی همگی نقش تعیین کننده ای در سنجش کیفیت کلوپ ها دارند.
          </p>
          <p className={styles.p_marina}>
            درمیان تمام کلوپ های تفریحات دریایی جزیره کیش، تنها مارینا کیش موفق
            به کسب گواهینامه 5 ستاره کیفیت با امتیاز کامل شده است. بدین ترتیب
            مارینا کیش تنها کلوپ 5 ستاره جزیره است که از طرف سازمان منطقه آزاد
            کیش بعنوان بهترین کلوپ جزیره کیش معرفی شده است.
          </p>
          <p className={styles.p_marina}>
            محیطی بزرگ و ظرفیت بالای سرویس دهی کلوپ مارینا کیش،تجهیزات ورزشی و
            تفریحی بروز و قایق های نو در کنار وجود اسکله اختصاصی برای سوار و
            پیاده شدن مشتریان از اسکله به قایق ها ، مجهز بودن به رختکن و لاکر
            اختصاصی بهمراه دوش ها و سرویس بهداشتی برای مشتریان و همچنین داشتن
            غرفه های غذا و نوشیدنی در لانژ ساحلی سبب شده است تا کلوپ مارینا کیش
            بزرگترین کلوپ تفریحات دریایی ایران باشد و خدماتی با کیفیت و متفاوت
            از سایر مجموعه های مشابه به گردشگران و علاقه مندان ارائه می کند.
            مشتریان هم در زمان انتظار بین تفریحات میتوانند از سایر خدمات مجموعه
            بهره مند شوند یا در لانژ ساحلی به استراحت بپردازند.
          </p>
        </div>
        <div className={styles.div_img_marina}>
          <div className={styles.img1_marina}></div>
          <div className={styles.img2_marina}></div>
          <div className={styles.img3_marina}></div>
        </div>
      </div>
    </>
  );
}

export default ContectUs;
