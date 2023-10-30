"use client"
import ballon from '../image/p.png';
import ballonab from '../image/p2.png';
import star from '../image/setar.png';
import save from '../image/save.png';
import like from '../image/hurt.png'
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
import zarb from '../image/zz.png';
import zarbx from '../image/zzzz.svg'
import mosbat from '../image/mosbat.png';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import balllonab from '../image/ballonro.png';
import Image from "next/image";
import lin2 from '../image/line2.png';
import flash from '../image/flash.png';

import gold from '../image/mosbatgold.png';
import ghermez from '../image/zarbghemz.png';
import './panel.css'
import {Calendar, CalendarProvider} from "zaman";
import {url} from "inspector";

export default function page() {


    const [cardcom, setcordcom] = useState([{
        name: 'محمد',
        lastname: 'علوی',
        matn: 'عالی بود. برای من تجربه هیجان انگیزی بود. به شدت توصیه می کنم و حتما در سفر های بعدی دوباره رزرو خواهم کرد. '
    },
        {name: 'سید محمد هاشمی', lastname: 'علوی', matn: 'عالی بود. رفتم کیش ۱۲۰۰دلار خرج کردم. '},
        {name: 'امیر حسین الوی', lastname: 'علوی', matn: 'رفتم کیش خونه فامیلمون بابام پول نداد. '},

        {name: 'علی جکوری', lastname: 'علوی', matn: 'من نو کیش کار پیدا کردم تو اسنپ . '},
        {name: 'حسین شابدول ازیمی', lastname: 'علوی', matn: 'عالی بود فقط چلوکباباش گرون بود شابدو لزیم سخی ۲۰ تونه. '},

        {name: 'سید محمد هاشمی', lastname: 'علوی', matn: 'عالی بود. رفتم کیش ۱۲۰۰دلار خرج کردم. '},
        {name: 'امیر حسین الوی', lastname: 'علوی', matn: 'رفتم کیش خونه فامیلمون بابام پول نداد. '},

        {name: 'علی جکوری', lastname: 'علوی', matn: 'من نو کیش کار پیدا کردم تو اسنپ . '},
        {name: 'حسین شابدول ازیمی', lastname: 'علوی', matn: 'عالی بود فقط چلوکباباش گرون بود شابدو لزیم سخی ۲۰ تونه. '},


        {
            name: 'محمد',
            lastname: 'علوی',
            matn: 'عالی بود. برای من تجربه هیجان انگیزی بود. به شدت توصیه می کنم و حتما در سفر های بعدی دوباره رزرو خواهم کرد. '
        },
        {name: 'سید محمد هاشمی', lastname: 'علوی', matn: 'عالی بود. رفتم کیش ۱۲۰۰دلار خرج کردم. '},
        {name: 'امیر حسین الوی', lastname: 'علوی', matn: 'رفتم کیش خونه فامیلمون بابام پول نداد. '},

        {name: 'علی جکوری', lastname: 'علوی', matn: 'من نو کیش کار پیدا کردم تو اسنپ . '},
        {name: 'حسین شابدول ازیمی', lastname: 'علوی', matn: 'عالی بود فقط چلوکباباش گرون بود شابدو لزیم سخی ۲۰ تونه. '},

        {name: 'سید محمد هاشمی', lastname: 'علوی', matn: 'عالی بود. رفتم کیش ۱۲۰۰دلار خرج کردم. '},
        {name: 'امیر حسین الوی', lastname: 'علوی', matn: 'رفتم کیش خونه فامیلمون بابام پول نداد. '},

        {name: 'علی جکوری', lastname: 'علوی', matn: 'من نو کیش کار پیدا کردم تو اسنپ . '},
        {name: 'حسین شابدول ازیمی', lastname: 'علوی', matn: 'عالی بود فقط چلوکباباش گرون بود شابدو لزیم سخی ۲۰ تونه. '},
        {
            name: 'محمد',
            lastname: 'علوی',
            matn: 'عالی بود. برای من تجربه هیجان انگیزی بود. به شدت توصیه می کنم و حتما در سفر های بعدی دوباره رزرو خواهم کرد. '
        },
        {name: 'سید محمد هاشمی', lastname: 'علوی', matn: 'عالی بود. رفتم کیش ۱۲۰۰دلار خرج کردم. '},
        {name: 'امیر حسین الوی', lastname: 'علوی', matn: 'رفتم کیش خونه فامیلمون بابام پول نداد. '},

        {name: 'علی جکوری', lastname: 'علوی', matn: 'من نو کیش کار پیدا کردم تو اسنپ . '},
        {name: 'حسین شابدول ازیمی', lastname: 'علوی', matn: 'عالی بود فقط چلوکباباش گرون بود شابدو لزیم سخی ۲۰ تونه. '},

        {name: 'سید محمد هاشمی', lastname: 'علوی', matn: 'عالی بود. رفتم کیش ۱۲۰۰دلار خرج کردم. '},
        {name: 'امیر حسین الوی', lastname: 'علوی', matn: 'رفتم کیش خونه فامیلمون بابام پول نداد. '},

        {name: 'علی جکوری', lastname: 'علوی', matn: 'من نو کیش کار پیدا کردم تو اسنپ . '},
        {name: 'حسین شابدول ازیمی', lastname: 'علوی', matn: 'عالی بود فقط چلوکباباش گرون بود شابدو لزیم سخی ۲۰ تونه. '},


    ]);

    interface cardcoment {
        name: string,
        lastname: string,
        matn: string,
        email: string,
    }


    const [name, setname] = useState("");
    const [lastname, setlastnamer] = useState('');
    const [matn, setmatn] = useState('');
    const [email, setemail] = useState<string>('')
    const [number, setnumer] = useState<number>(0)
    const [bull, setbull] = useState<boolean>(false)
    const [inputcolor, setinputcolor] = useState<boolean>(false)
    const [inputcolor2, setinputcolor2] = useState<boolean>(false)

    const [mosb, setmosb] = useState<boolean>(false)
    const [mosb2, setmosb2] = useState(false)


    const emmmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        const emailAddress = e.target.value;

        console.log(emailAddress); // Add this line to check the input

        if (regex.test(emailAddress)) {
            setemail(emailAddress);
        }
    }

    const nameeee = (e: React.ChangeEvent<HTMLInputElement>) => {

        const regex = /^[\p{L}\s]*$/u;
        const inputName = e.target.value

        if (regex.test(inputName)) {

            setname(e.target.value)
        }

    const matnee = (e: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^[\p{L}\s]*$/u;
        const inputName = e.target.value
        if (regex.test(inputName)) {
            setmatn(e.target.value)
        }


    }


    const lastnameeee = (e: React.ChangeEvent<HTMLInputElement>) => {

        const regex = /^[\p{L}\s]*$/u;
        const inputName = e.target.value

        if (regex.test(inputName)) {

            setlastnamer(e.target.value)
        }


    }


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
                        <div className='divpmahsol'>
                            <p className='pmahsol'>
                                <br/> ارتفاع شما از سطح دریا حداکثر حد مجاز خواهد بود. (بین 50 تا 100 متر)
                                <br/> در صورتی که خودتان اجازه دهید، ناخدا شما را لحظاتی درون آب دریا خواهد کشاند.
                                <br/> مدت زمان کلی تفریح از لحظه حرکت از ساحل تا بازگشت حدود 1 ساعت است و مدت پرواز در
                                بالاترین ارتفاع درخواستی حدود 6 دقیقه.
                                <br/> رزرو غیر قابل کنسلی اما قابل تغییر زمان است. (در شرایط نامساعد آب و هوایی مبلغ
                                بدون کسر جریمه عودت داده می شود)
                                <br/> ساعت مراجعه : از ساعت 9 الی 16
                                <br/> پاراسل یا بالن یا چتر سواری روی دریا به چتری گفته می شود که بوسیله کابل به قایق
                                <br/> متصل شده است. شما با سوار شدن در جایگاه مخصوص چتر و اتصال لوازم ایمنی، به ارتفاع
                                تعیین شده خواهید رفت.
                                <br/>قایق مخصوص است و آرامش و لذت بالایی را برای استفاده کننده هدیه می دهد.
                            </p>
                        </div>
                        <div className='divghavanin'>
                            <p className='ghavanin'>
                                قوانین و شرایط استفاده
                            </p>
                        </div>

                        <div className='divnevghavanin'>
                            <div className='hhnav'>
                                <p className='nevghavanin'>
                                    <br/>ممکن است افرادی که تا به حال تجربه استفاده از پاراسیلینگ را نداشته‌اند درباره
                                    <br/>مسائل ایمنی این تفریح هیجان‌انگیز تردید کنند. مسائل مختلفی که شامل سالم بودن
                                    <br/> چتر، استحکام کمربندها، سالم بودن قایق موتوری و.. می‌شود. مطمئنا بررسی کردن
                                    <br/> این موارد برای گردشگران کار خوشایند و آسانی نیست. بنابراین اولین توصیه ما این
                                    <br/> است که در جایی به پاراسیلینگ بروید که از با سابقه و معتبر باشد. در کل احتمال
                                    بروز
                                    <br/>هر گونه حادثه‌ای بسیار پایین است اما ضمن نکته مهمی که گفتیم، موارد زیر را جهت
                                    کاهش خطرات پاراسیلینگ در نظر داشته باشید.
                                </p>
                                <ul className='navul'>
                                    <li className='vali'>
                                        هرچه وضعیت آب و هوا آرام‌تر باشد بهتر است: با وجود اینکه در آب و هوای بارانی و
                                        طوفانی پاراسیلینگ اجرا نمی‌شود، بدانید که ایده‌آل ترین سرعت وزش باید برای
                                        پاراسیلینگ از 19 تا نهایتا 43 کیلومتر بر ساعت است. از اواسط فصل بهار تا اوایل
                                        فصل پاییز معمولا وضعیت جوی برای پاراسیلینگ بسیار مناسب است.
                                    </li>
                                    <li className='vali'>
                                        در پاراسیلینگ محدودیت سنی خاصی وجود ندارد اما اگر همراه کوچک‌تر از 16 سال دارید،
                                        بهتر است مطمئن شوید که صندلی وی مناسب جثه‌اش است و کمربندها فاصله خالی با او
                                        نداشته باشد.
                                    </li>
                                    <li className='vali'>
                                        مجریان برگزاری پاراسیلینگ قبل از استفاده از پاراسل به وزن شما توجه می‌کنند، اما
                                        پیش از آن بدانید که باید وزن مسافران حداقل 40 کیلوگرم و حداکثر 181 کیلوگرم باشد.
                                    </li>
                                    <li className='vali'>
                                        راه‌های ارتباطی را فراموش نکنید: اگر به هر دلیلی خواهان توقف اجباری قایق باشید
                                        یا اینکه بخواهید ارتفاع شما با سطح آب کمتر شود نیاز دارید که با راننده قایق خود
                                        ارتباط برقرار کنید. استفاده از بی‌سیم‌ یکی از مطمئن‌ترین روش‌ها برای برقراری
                                        ارتباط است چرا که در ارتفاعات بالاتر از 200 متر علائم دستی هم برای شما کار ساز
                                        نخواهد بود.
                                    </li>
                                    <li className='vali'>
                                        پاراسیلینگ یک تفریح است و نه یک ورزش: برای پاراسل سواری شما نیاز به تمرین و
                                        مهارت خاصی ندارید زیرا پاراسسلینگ نیاز به هیچ مهارت و استعدادی ندارد! پس بدون
                                        هیچ ترس و استرس از سواری خود لذت ببرید.
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className='links'>
                        <Image src={balllonab} className='ballonroab' alt=''/>
                        <div className='divnevtaghvim'>
                            <div className='divkhali'></div>
                            <p className='nevtaghvim'>
                                تقویم
                            </p>
                        </div>
                        <div className='taghvim'>
                            <div className='calnder'>
                            </div>
                            <div className='baghicalnnder'>

                                <p className='zamanbandi'>
                                    زمان بندی
                                </p>

                                <p className='zamanbandibadi'>
                                    از ساعت 9 الی 17 در ساحل درج شده در بلیط رزرو
                                </p>
                            </div>

                            <div className='diventekhab'>

                                <div className='diventekhab1'>

                                    <div className='divv1'>

                                        <div className='ej'>
                                            <div onClick={(e) => {

                                                setinputcolor(inputcolor === false ? true : false)

                                                console.log(inputcolor)
                                            }}

                                                 style={{backgroundColor: inputcolor === true ? '#07D95A' : '#E0E0E0'}}

                                                 className='inpubox'></div>

                                            <p className='ejare'>
                                                اجاره ساعتی :
                                            </p>
                                        </div>
                                    </div>

                                    <p className='gheymat'>
                                        6 دقیقه برای هر نفر : 654,000 تومان
                                    </p>
                                </div>
                                <div className='diventekhab2'>

                                    <div className='ej'>
                                        <div onClick={(e) => {

                                            setinputcolor2(inputcolor2 === false ? true : false)

                                            console.log(inputcolor2)
                                        }}

                                             style={{backgroundColor: inputcolor2 === false ? '#07D95A' : '#E0E0E0'}}

                                             className='inpubox'></div>

                                        <p className='ejare'>
                                            اجاره روزانه :
                                        </p>
                                    </div>
                                    <p className='gheymat'>
                                        24 ساعت برای هر نفر : 7,000,000 تومان

                                    </p>
                                </div>

                            </div>

                            <button className='buttonabi'><Image className='axax' src={flash} width='18' height='13'
                                                                 alt=''/><p className='rezerv'>رزرو</p></button>
                        </div>
                        <div className='moshahede'>
                            <Image onClick={(event) => {

                                setmosb(true)
                                {
                                    setnumer(number + 1)
                                    setmosb2(false)
                                }

                                setmosb(mosb === false)
                            }

                            } width='32' height='32' style={{backgroundImage: 'black'}} src={zarbx} className='mosbat'
                                   alt=''/>
                            <p className='pnumber'>{number}</p>
                            <Image onClick={(event) => {


                                if (number < 0) {
                                    setnumer(number * 0)


                                } else if (number > 0) {
                                    setnumer(number - 1)
                                    setmosb2(true)
                                }

                                setmosb2(mosb2 === false)
                                setmosb(false)


                            }} width='32' height='32' src={mosb2 === true ? ghermez : zarb} alt=''/>
                            <Link href='/' className='moshahedesabad'>مشاهده سبد خرید</Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className='nazaratkarbardiv'>
                <div className='nazarkarbarheader'>
                    <Image src={line} width='280' alt=''/>
                    <p className='nevnazarkarbar'>
                        نظرات کاربران
                    </p>
                    <Image src={lin2} width='280' alt=''/>
                </div>
                <div className='divdidgah55'>
                    <p className='didgah55'>
                        55 دیدگاه برای پاراسیل کلوپ دریایی 5 ستاره مارینا کیش ثبت شده است.
                    </p>
                </div>
                <div className='coment' style={{
                    overflow: bull === true ? "visible" : 'hidden',
                    height: bull === false ? '445px' : 'fit-content',
                }}>
                    {cardcom.map((item, index) => {

                        return (<div key={index} className='vidcoment'>


                            <div className='khataval'>
                                <p className='namecom'>
                                    {item.name} - 10 اردیبهشت 1402
                                </p>
                                <div className='star'>
                                    <Image src={star} width='16' height='16' alt=''/>
                                    <Image src={star} width='16' height='16' alt=''/>
                                    <Image src={star} width='16' height='16' alt=''/>
                                    <Image src={star} width='16' height='16' alt=''/>
                                    <Image src={star} width='16' height='16' alt=''/>
                                </div>

                            </div>
                            <p className='matn'>{item.matn}</p>

                        </div>)
                    })}


                </div>
                <div className='divbutton'>
                    <button onClick={(e) => {
                        if (bull === true) {
                            setbull(false)
                        } else if (bull === false) {
                            setbull(true)
                        }
                        console.log(bull)
                    }} className='but'>

                        <p className='pbut'>

                            {bull === true ? ' نمایش کمتر' : ' نمایش بیشتر'}

                        </p>

                    </button>
                </div>
                <div className='nazarkarbarheader' style={{display: bull === true ? 'none' : 'flex'}}>
                    <Image src={line} width='280' alt=''/>
                    <p className='nevnazarkarbar2'>
                        نظر خود را با ما در میان بگذارید.
                    </p>
                    <Image src={lin2} width='280' alt=''/>
                </div>

                <div className='inputscom' style={{display: bull === true ? 'none' : 'flex'}}>
                    <div className='div2input'>
                        <input value={name} type="text" onChange={(e) => nameeee(e)} placeholder='نام'
                               className='k2input'/><input onChange={(e) => lastnameeee(e)} value={lastname}
                                                           placeholder='نام خانوادگی'
                                                           className='k2input'/>
                    </div>
                    <input value={email} type="email" onChange={(e) => setemail(e.target.value)} placeholder='ایمیل'
                           className='inputemail'/>

                    <input value={matn} onChange={(e) => matnee(e)} type='text' placeholder='متن پیام...'
                           className='matnpayam'/>

                    <div className='ersalpayam'>

                        <button onClick={() => {
                            if (name !== "" && lastname !== '' && email !== '' && matn !== '') {

                                const cardcomt: cardcoment = {
                                    name: name,
                                    lastname: lastname,
                                    email: email,
                                    matn: matn,
                                }

                                const temp = [...cardcom]
                                temp.push(cardcomt)
                                setcordcom(temp)

                                setemail('')
                                setname('')
                                setmatn('')
                                setlastnamer('')


                            }
                        }} className='buttomtala'><p className='pnazar'>ثبت نظر</p></button>
                    </div>
                    <div style={{width: '100%', height: '20px'}}>

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
                    <div><Image src={line} width='128' alt=''/>
                    </div>
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