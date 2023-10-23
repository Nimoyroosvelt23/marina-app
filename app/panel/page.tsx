"use client"
import ballon from '../image/p.png';
import ballonab from '../image/p2.png';
import star from '../image/setar.png';
import save from '../image/save.png';
import like from '../image/hurt.png'
import React, {useState} from "react";
import line from '../image/Line 18.png'
import keshti from '../image/kish.png'
import ax1 from '../image/1.png';
import ax2 from '../image/2png.png'
import ax3 from '../image/3.png'
import ax4 from '../image/4.png'
import ax5 from '../image/5.png'
import ax6 from '../image/6.png'
import t from '../image/twiyer.png'
import facebook from '../image/facebook.png'
import insta from '../image/insta.png'
import ngo from '../image/ngo.png'
import ngo2 from '../image/ngo2.png';
import ngo3 from '../image/ngo3.png';
import icon from '../image/icon.png';
import Image from "next/image";
import './panel.css'

export default function page() {

    return (
        <div className="divkol">


            <div className='header'>
                <ul className='item_header'>
                    <div className='right_header'>
                        <li>
                            {" "}
                            <Image
                                src={"/icon/logo-kish-enjoy 1.svg"}
                                alt="GFG logo served with static path of public directory"
                                height="52"
                                width="87"
                            />
                        </li>
                        <div className='div_li_header1'>
                            <li className='li_header1'>تفریحات دریایی</li>
                            <Image
                                src={"/icon/Expand_down.svg"}
                                alt="GFG logo served with static path of public directory"
                                height="24"
                                width="24"
                            />
                        </div>
                        <div className='div_span1_3'>
                            <li>
                                <span className='span1'>رزرو اقامتگاه</span>
                            </li>
                            <li className='span1'> تماس با ما</li>
                            <li className='span1'> بلاگ</li>
                        </div>
                    </div>
                    <div className='left_header'>
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
            <div className='nonheader'>
                <div className='bala'>

                    <Image src={line} width='128' alt=''/>


                    <h4 className='taknafare'>پاراسیل</h4>

                    <div className='vasaticon'>
                    </div>

                    <div className='iconsamtrast'>
                        <div className='icon'>
                            <Image width='32' height='32' src={save} alt=''/>
                            <Image width='32' height='32' src={like} alt=''/>

                        </div>
                        <div className='icon'>
                            <Image src={star} width='16' height='16' alt=''/>
                            <Image src={star} width='16' height='16' alt=''/>
                            <Image src={star} width='16' height='16' alt=''/>
                            <Image src={star} width='16' height='16' alt=''/>
                            <Image src={star} width='16' height='16' alt=''/>
                        </div>

                    </div>

                </div>

                <div className="nevshte">
                    <div className='recht'>
                        <div className='axayrast'>
                            <Image className='axballon' src={ballon} alt=''/>
                            <Image className='axballon' src={ballonab} alt=''/>
                        </div>
                        <div className='divdarajeb'>
                            <p className='darajeb'>
                                درباره محصول
                            </p>

                        </div>
                        <div className= 'divpmahsol'>
                        <p className='pmahsol'>
                            <br/> ارتفاع شما از سطح دریا حداکثر حد مجاز خواهد بود. (بین 50 تا 100 متر)
                            <br/> در صورتی که خودتان اجازه دهید، ناخدا شما را لحظاتی درون آب دریا خواهد کشاند.
                            <br/> مدت زمان کلی تفریح از لحظه حرکت از ساحل تا بازگشت حدود 1 ساعت است و مدت پرواز در بالاترین ارتفاع درخواستی حدود 6 دقیقه.
                            <br/>  رزرو غیر قابل کنسلی اما قابل تغییر زمان است. (در شرایط نامساعد آب و هوایی مبلغ بدون کسر جریمه عودت داده می شود)
                        <br/>     ساعت مراجعه : از ساعت 9 الی 16
                            <br/>  پاراسل یا بالن یا چتر سواری روی دریا به چتری گفته می شود که بوسیله کابل به قایق
                          <br/>  متصل شده است. شما با سوار شدن در جایگاه مخصوص چتر و اتصال لوازم ایمنی، به ارتفاع تعیین شده خواهید رفت.
                            <br/>قایق مخصوص است و آرامش و لذت بالایی را برای استفاده کننده هدیه می دهد.
                        </p>
                    </div>
                        <div className='divghavanin'>
                            <p className='ghavanin'>
                                قوانین و شرایط استفاده
                            </p>
                        </div>

                        <div className='divnevghavanin'>

                            <p className='nevghavanin'>




                                <br/>ممکن است افرادی که تا به حال تجربه استفاده از پاراسیلینگ را نداشته‌اند درباره
                                <br/>مسائل ایمنی این تفریح هیجان‌انگیز تردید کنند. مسائل مختلفی که شامل سالم بودن
                                <br/> چتر، استحکام کمربندها، سالم بودن قایق موتوری و.. می‌شود. مطمئنا بررسی کردن
                                <br/>   این موارد برای گردشگران کار خوشایند و آسانی نیست. بنابراین اولین توصیه ما این
                                <br/>     است که در جایی به پاراسیلینگ بروید که از با سابقه و معتبر باشد. در کل احتمال بروز
                                <br/>هر گونه حادثه‌ای بسیار پایین است اما ضمن نکته مهمی که گفتیم، موارد زیر را جهت کاهش خطرات پاراسیلینگ در نظر داشته باشید.

                                <ul>
                                    <li>
                                    هرچه وضعیت آب و هوا آرام‌تر باشد بهتر است: با وجود اینکه در آب و هوای بارانی و طوفانی پاراسیلینگ اجرا نمی‌شود، بدانید که ایده‌آل ترین سرعت وزش باید برای پاراسیلینگ از 19 تا نهایتا 43 کیلومتر بر ساعت است. از اواسط فصل بهار تا اوایل فصل پاییز معمولا وضعیت جوی برای پاراسیلینگ بسیار مناسب است.
                        <br/>    </li>
                                   <li>
                                       در پاراسیلینگ محدودیت سنی خاصی وجود ندارد اما اگر همراه کوچک‌تر از 16 سال دارید، بهتر است مطمئن شوید که صندلی وی مناسب جثه‌اش است و کمربندها فاصله خالی با او نداشته باشد.
                                       <br/>   </li>
                                <li>
                                    مجریان برگزاری پاراسیلینگ قبل از استفاده از پاراسل به وزن شما توجه می‌کنند، اما پیش از آن بدانید که باید وزن مسافران حداقل 40 کیلوگرم و حداکثر 181 کیلوگرم باشد.
                                    <br/>   </li>
                                <li>
                                    راه‌های ارتباطی را فراموش نکنید: اگر به هر دلیلی خواهان توقف اجباری قایق باشید یا اینکه بخواهید ارتفاع شما با سطح آب کمتر شود نیاز دارید که با راننده قایق خود ارتباط برقرار کنید. استفاده از بی‌سیم‌ یکی از مطمئن‌ترین روش‌ها برای برقراری ارتباط است چرا که در ارتفاعات بالاتر از 200 متر علائم دستی هم برای شما کار ساز نخواهد بود.
                                    <br/>   </li>
                                <li>
                                    پاراسیلینگ یک تفریح است و نه یک ورزش: برای پاراسل سواری شما نیاز به تمرین و مهارت خاصی ندارید زیرا پاراسسلینگ نیاز به هیچ مهارت و استعدادی ندارد! پس بدون هیچ ترس و استرس از سواری خود لذت ببرید.
                                    <br/>     </li>
                                </ul>
                        </p>

                        </div>
                    </div>
                    <div className='links'>

                    </div>
                </div>
            </div>
            <div className='end'>
                <Image alt="" src={keshti} height='91' width='176'/>
                <p className='pain'>
                    مارینا کیش تخصصی ترین و متنوع ترین ارائه دهنده کالا و تجهیزات دریایی در کشور عزیزمان می باشد. از این
                    رو به عنوان نماینده انحصاری کمپانی های معتبری همچون، ژانو، ردپدل، ویبیت، هوبی کت و بسیاری از تجهیزات
                    دریایی دیگر، تخصصی ترین فروشگاه های دریایی با طیف متنوعی از محصولات و تجهیزات را دارا می باشد.
                </p>

                <div className='bilder'>
                    <Image alt="" src={ax1} width='90' height='42'/>
                    <Image alt="" src={ax2} width='90' height='42'/>
                    <Image alt="" src={ax3} width='90' height='42'/>
                    <Image alt="" src={ax4} width='90' height='42'/>
                    <Image alt="" src={ax5} width='90' height='42'/>
                    <Image alt="" src={ax6} width='90' height='42'/>
                </div>

            </div>
            <div className='darakhar'>
                <div className='divtah'>
                    <div></div>
                    <div className='divd'>
                        <h4 className='kie'>
                            تفریحات دریایی
                        </h4>
                    </div>

                    <span>

                        </span>

                    <div className='divd'>
                        <h4 className='kie2'>
                            رزرو اقامتگاه
                        </h4>
                    </div>
                    <span>

                        </span>
                    <div className='divd'>
                        <h4 className='kie'>
                            تماس با ما
                        </h4>
                    </div>
                    <span>
                        </span>
                    <div className='divd'>
                        <h4 className='kie'>
                            بلاگ

                        </h4>
                    </div>
                </div>

                <div className='vasat'>

                </div>

                <div className='rast'>

                    <Image alt="hhhhhh" src={ngo} width='54' height='46'/>
                    <Image alt="hhhhhh" src={ngo2} width='30' height='44'/>
                    <Image alt="hhhhhh" src={ngo3} width='46' height='42'/>
                    <Image alt="hhhhhh" src={insta} width='24' height='24'/>
                    <Image alt="hhhhhh" src={facebook} width='24' height='24'/>
                    <Image alt="hhhhhh" src={t} width='24' height='24'/>
                </div>

            </div>
        </div>
    );
}