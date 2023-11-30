"use client";
import React, { useState } from "react";
import styles from "./center.module.css";
import Image from "next/image";
// import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styless from "../home-page/style.module.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slider from "./Slider";
import Slider2 from "./Slider2";
function Center() {
  const [inputValue, setInputVlaue] = useState<string>("");
  const NameWaterSports = [
    {
      img: "/icon/Group1.svg",
      title: "تفریحات تک نفره",
      text: "فرصتی برای رهایی از همه دردهای روزمره و لذت بردن از آرامش و طبیعت زیبای دریا می باشد.",
    },
    {
      img: "/icon/Group2.svg",
      title: "تفریحات دو نفره",
      text: "فرصتی برای ایجاد خاطرات شیرین و افزایش ارتباط عاطفی بین دو نفره و لذت بردن از طبیعت و آرامش دریا می باشد.",
    },
    {
      img: "/icon/Group3.svg",
      title: "تفریحات گروهی",
      text: "فرصتی است برای ایجاد ارتباط و همبستگی بین اعضای گروه در محیطی زیبا و مسالمت‌بخش.",
    },
    {
      img: "/icon/Group4.svg",
      title: "کشتی های VIP",
      text: "فرصتی برای رهایی از همه دردهای روزمره و لذت بردن از آرامش و طبیعت زیبای دریا می باشد.",
    },
  ];
  console.log(inputValue);
  return (
    <>
      <div className={styles.water1_sports}>
        {NameWaterSports.map((item, index) => (
          <div key={index} className={styles.water_sports}>
            <div className={styles.div_circle}>
              <Image src={item.img} alt="item" width={64} height={64} />
            </div>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.divhr}>
        <div className={styles.hr}></div>
        <span className={styles.point}></span>
        <p className={styles.phr}>آغاز ماجراجویی ها از همین جاست!</p>
        <span className={styles.point2}></span>
        <div className={styles.hr2}></div>
      </div>
      <div className={styles.div_imgs}>
        <div className={styles.div_right_img}>
          <div className={styles.img1}></div>
          <div className={styles.div_down_img}>
            <div className={styles.img2}></div>
            <div className={styles.img3}></div>
          </div>
        </div>
        <div className={styles.img4}></div>
      </div>
      <div className={styless.div_slider}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className={styless.mySwiper}
        >
          <SwiperSlide>
            <div className={styless.slide1_content_container}>
              <div className={styless.img_contentTop}></div>
              <div className={styless.slide1_buttom_content}>
                <p className={styless.textstyle_slider1}>
                  فرصتی عالی برای لذت بردن از طبیعت زیبا و آرامش‌بخش دریا و ساحل
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styless.slide2_content_container}>
              <div className={styless.img2_contentTop}></div>
              <div className={styless.slide2_buttom_content}>
                <p className={styless.textstyle_slider2}>
                  دقایقی آرامش بخش کنار خانواده در کشتی های تفریحی VIP جزیره کیش
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styless.slide3_content_container}>
              <div className={styless.img3_contentTop}></div>
              <div className={styless.slide3_buttom_content}>
                <p className={styless.textstyle_slider3}>
                  لحظات لذت بخش و پر از هیجان را کنار دوستانتان با کایاک تجربه
                  کنید
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.divhr2}>
        <Image src={"/icon/Line 27.svg"} alt="item" width={360} height={360} />

        <p className={styles.phr2}>هیجان رو تجربه کن!</p>
        <Image src={"/icon/Line 26.svg"} alt="item" width={360} height={360} />
      </div>
      <div className={styles.div_slider_2}>
        <Slider />
        <Slider2/>
      </div>
      <div className={styles.oferr}></div>
      <div className={styles.divhr2}>
        <Image src={"/icon/Line 27.svg"} alt="item" width={360} height={160} />

        <p className={styles.phr2}>منتظر چی هستی؟</p>
        <Image src={"/icon/Line 26.svg"} alt="item" width={360} height={160} />
      </div>
      <p className={styles.p_news}>
        از آخرین خبرهای ما درباره تفریحات مورد نظرت باخبر شو!
      </p>
      <div className={styles.div_news}>
        <div className={styles.img1_news}>
          <div className={styles.qwe}>
            <div style={{ width: "75%" }}>
              <p>تماشای دریای بی کران با قایق های بادبانی</p>
            </div>
            <div className={styles.qwe2}>
              <p>مشاهده بیشتر</p>
              <Image
                src="/icon/Arrow_left2.svg"
                alt=""
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className={styles.img2_news}>
          <div className={styles.qwe}>
            <div style={{ width: "75%" }}>
              <p>تماشای دریای بی کران با قایق های بادبانی</p>
            </div>
            <div className={styles.qwe2}>
              <p>مشاهده بیشتر</p>
              <Image
                src="/icon/Arrow_left2.svg"
                alt=""
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className={styles.img3_news}>
          {" "}
          <div className={styles.qwe}>
            <div style={{ width: "75%" }}>
              <p>تماشای دریای بی کران با قایق های بادبانی</p>
            </div>
            <div className={styles.qwe2}>
              <p>مشاهده بیشتر</p>
              <Image
                src="/icon/Arrow_left2.svg"
                alt=""
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className={styles.img4_news}>
          {" "}
          <div className={styles.qwe}>
            <div style={{ width: "75%" }}>
              <p>تماشای دریای بی کران با قایق های بادبانی</p>
            </div>
            <div className={styles.qwe2}>
              <p>مشاهده بیشتر</p>
              <Image
                src="/icon/Arrow_left2.svg"
                alt=""
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className={styles.img5_news}>
          {" "}
          <div className={styles.qwe}>
            <div style={{ width: "75%" }}>
              <p>تماشای دریای بی کران با قایق های بادبانی</p>
            </div>
            <div className={styles.qwe2}>
              <p>مشاهده بیشتر</p>
              <Image
                src="/icon/Arrow_left2.svg"
                alt=""
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.div_information_marina}>
        <div className={styles.div_about_marina}>
          <div className={styles.title_about}>
            <p>درباره مارینا کیش بیشتر بدانیم</p>
            <div className={styles.hr00}></div>
          </div>
          <div className={styles.div_img_about}>
            <div className={styles.img_about}></div>
            <div className={styles.color_bc}></div>
          </div>
          <div className={styles.div_words}>
            <p className={styles.p_about}>
              مارینا کیش بعنوان نخستین مارینای ایران در ساحل مارینا پارک هتل کیش
              احداث شده و با توجه به داشتن هتلی مجلل و لوکس (مارینا پارک هتل) در
              کنار حوضچه اختصاصی برای نگهداری شناورهای لوکس...
            </p>
          </div>
        </div>
        <div className={styles.div_about_marina2}>
          <div className={styles.title_about2}>
            <p>شناورهای آرام گرفته در ساحل</p>
            <div className={styles.hr002}></div>
          </div>
          <div className={styles.div_img_about2}>
            <div className={styles.img_about2}></div>
            <div className={styles.color_bc2}></div>
          </div>
          <div className={styles.div_words2}>
            <p className={styles.p_about}>
              {" "}
              مالکین شناور می‌توانند بعد از اجاره محل مورد نظر شناور خود را در
              مارینا گذاشته و مجموعه مارینا موظف به رسیدگی و محافظت از شناور
              بوده تا شناور همیشه در وضعیت مطلوب خود قرار داشته باشد تا...
            </p>
          </div>
        </div>
      </div>
      <div className={styles.div_reserv}>
        <p className={styles.p_reserv1}>بعد از اون همه کار تفریح میچسبه!</p>
        <p className={styles.p_reserv2}>همین الان رزرو کن</p>
        <button className={styles.button_reserv}>رزرو کنید</button>
      </div>
      <div className={styles.base_comment}>
        <div className={styles.div_comment_right}>
          <div className={styles.img1_comment}></div>
          <div className={styles.img2_comment}></div>
          <div className={styles.img3_comment}></div>
        </div>
        <div className={styles.div_comment_center}>
          <p className={styles.p_comment}>نظرات مشتریان</p>
          <p>ما مورد اعتماد مشتریان هستیم!</p>
          <div className={styles.div_img4_comment}>
            <div className={styles.img4_comment}></div>
            <p>داریوش حق شناش</p>
            <p className={styles.p_img4}>
              {" "}
              مالکین شناور می‌توانند بعد از اجاره محل مورد نظر شناور خود را در
              مارینا گذاشته و مجموعه مارینا موظف به رسیدگی و محافظت از شناور
              بوده تا شناور همیشه در وضعیت مطلوب بماند.
            </p>
          </div>
        </div>
        <div className={styles.div_comment_left}>
          <div className={styles.img5_comment}></div>
          <div className={styles.img6_comment}></div>
          <div className={styles.img7_comment}></div>
        </div>
      </div>
      <div className={styles.divhr4}>
        <div className={styles.divhr3}>
          <div className={styles.hr3}></div>
          <span className={styles.point3}></span>
        </div>
        <p className={styles.phr3}>شما هم نظر دهید</p>
        <div className={styles.divhr3}>
          <span className={styles.point4}></span>
          <div className={styles.hr3}></div>
        </div>
      </div>
      <div className={styles.div_input}>
        <input
          className={styles.input}
          placeholder="نوشتن دیدگاه"
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputVlaue(e.target.value);
          }}
        />
        <Image
          style={{ marginLeft: "24px" }}
          src="/icon/send.svg"
          alt=""
          width={32}
          height={32}
        />
      </div>
      <div className={styles.div_base_question}>
        <div className={styles.divhr5}>
          <div className={styles.divhr3}>
            <div className={styles.hr3}></div>
            <span className={styles.point3}></span>
          </div>
          <p className={styles.phr3}>سوالات متداول</p>
          <div className={styles.divhr3}>
            <span className={styles.point4}></span>
            <div className={styles.hr3}></div>
          </div>
        </div>
        <div className={styles.div_question}>
          <div className={styles.question}>
            <div className={styles.div_p_question}>
              <Image src="/icon/reserve1.svg" alt="" width={24} height={24} />
              <p>از چند روز قبل بلیط بخریم؟</p>
            </div>
            <p className={styles.p2_question}>
              امکان رزرو از یک ماه قبل امکان دارد.
            </p>
          </div>
          <div className={styles.question}>
            <div className={styles.div_p_question}>
              <Image
                src="/icon/money-change.svg"
                alt=""
                width={24}
                height={24}
              />
              <p>
                {" "}
                آیا پس از خرید بلیط، امکان تغییر نام یا نام خانوادگی وجود دارد؟
              </p>
            </div>
            <p className={styles.p2_question}>
              خیر چون اطلاعات از قبل در سیستم ثبت می شوند.
            </p>
          </div>
        </div>
        <div className={styles.div_question}>
          <div className={styles.question}>
            <div className={styles.div_p_question}>
              <Image src="/icon/repeat2.svg" alt="" width={24} height={24} />
              <p>شرایط لغو رزرو بلیط ها به چه صورت است؟</p>
            </div>
            <p className={styles.p2_question}>
              در صورت لغو تا 48 ساعت قبل، تنها 50%ر مبلغ رزرو به حسابتان برمی
              گردد ولی در غیر این صورت مبلغی بازگشت داده نخواهد شد.
            </p>
          </div>
          <div className={styles.question}>
            <div className={styles.div_p_question}>
              <Image
                src="/icon/money-recive.svg"
                alt=""
                width={24}
                height={24}
              />
              <p>بازگشت پول به حسابم به چه صورت است؟</p>
            </div>
            <p className={styles.p2_question}>
              حداثر 72 ساعت پس از کثر پول از حساب شما (این زمان توسط بانک تعیین
              شده است)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Center;
