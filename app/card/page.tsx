"use client"

import { useRouter } from 'next/navigation'
import './card.css';
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
import ballonn from '../image/parashot.png'
import antrag from '../image/antrag.png'
import man from '../image/man.png'
import anrufen from '../image/telephone.png'
import zarin from '../image/zarinpars.png'
import up from '../image/up.png'

import melat from '../image/melt.png'
import parsian from '../image/parsian.png'

import Image from "next/image";
import NUka from "./nuka";
import HederBlog from '../blog/hederblog';

 
export default function page() {

    const router = useRouter()

    const [counter, setcounter] = useState<number>(0)
    const [box, setbox] = useState<boolean>(false)
    const [box2, setbox2] = useState(false)
    const [box3, setbox3] = useState(false)
    const [box4, setbox4] = useState(false)

    return (
        <div className="divkol">
                <HederBlog/>
            <div className='nonheader'>
                <div className='bala'>

                    <Image src={line} width='128' alt=''/>


                    <p className='taknafare'>سبد خرید</p>

                </div>


                <div className="nevshte">
                    <div className='avall'>

                    </div>

                    <div className='links'>

                        <div className='avallinks'>

                            <Image className='bablon' src={ballonn} alt=''/>

                            <div className='mahsol'>

                                <div className='margib'>

                                </div>

                                <div className='mahsolkochik'>

                                    <p className='mahsolparsil'>
                                        محصول : پاراسیل
                                    </p>
                                    <p className='mahsolparsil2'>

                                        مدت زمان استفاده : 6 دقیقه
                                    </p>


                                    <div className='mahsolparsil3'>

                                    </div>

                                </div>

                                <div className='mptyy'>

                                </div>

                                <div className='pricemahsol'>

                                    <div className='upprice'>

                                    </div>
                                    <div className='divprive'>
                                        <del className='price2'>
                                            ۶۵۴,۰۰۰ تومن
                                        </del>
                                    </div>
                                    <p className='price'>
                                        ۶۰۰,۰۰۰ تومن
                                    </p>
                                </div>

                                <div>

                                </div>
                            </div>

                            <div className='counter'>
                                <button onClick={(event) => {

                                    setcounter(counter + 1)

                                }
                                } className='butom'>+
                                </button>
                                <p className='nummer'>{counter}</p>
                                <button className='butom'

                                        onClick={(event) => {

                                            if (counter > 0) {
                                                setcounter(counter - 1)
                                            }
                                        }
                                        }


                                >-
                                </button>
                            </div>
                        </div>
                        <div className='divtakhfif'>
                            <div className='takhfif'>
                                <p className='ptakhfif'>
                                    افزودن کد تخفیف:
                                </p>
                            </div>
                        </div>
                        <div className='divtakhfif2'>
                            <div className='takhfif2'>

                                <div className='info1'>
                                    <Image src={antrag} className='acivo' alt=''/>
                                    <p className='pinfo1'>کد سفارش :</p>
                                    <p className='spinfo1'>46885244</p>
                                </div>

                                <div className='info2'>
                                    <Image className='acivo2' src={man} alt=''/>
                                    <p className='pinfo2'>تحویل گیرنده :</p>
                                    <p className='spinfo2'>نیمافخرائی</p>
                                </div>

                                <div className='info3'>
                                    <Image className='acivo2' src={anrufen} alt=''/>
                                    <p className='pinfo1'>شماره تماس :</p>
                                    <p className='spinfo1'>989373508036+</p>
                                </div>


                            </div>
                        </div>

                        <div className='divtakhfif3'>

                            <div className='uptakhfif3'>

                                <p className='ppardakht'>انتخاب درگاه پرداخت</p>
                            </div>
                            <div className='downtakhfif3'>
                                <div className='divbakpick'>

                                    <div className='divtiktik2'>
                                        <div className='tiktik2'>
                                            <div style={{background: box === false ? '#E0E0E0' : '#07D95A'}}
                                                 onClick={() => {
                                                     if (box === false) {
                                                         setbox(true)
                                                         setbox2(false)
                                                         setbox3(false)
                                                         setbox4(false)
                                                     } else if (box === true) {

                                                         setbox2(true)
                                                         setbox3(true)
                                                         setbox4(true)
                                                     }


                                                 }} className='inputchex'/>
                                        </div>
                                        <Image src={zarin} className='bakpick' alt=''/>
                                    </div>
                                </div>
                                <div className='divtiktik'>
                                    <div className='tiktik'>
                                        <div

                                            style={{background: box2 === false ? '#E0E0E0' : '#07D95A'}}
                                            onClick={() => {
                                                if (box2 === false) {
                                                    setbox2(true)
                                                    setbox(false)
                                                    setbox3(false)
                                                    setbox4(false)
                                                } else if (box2 === true) {

                                                    setbox(true)
                                                    setbox3(true)
                                                    setbox4(true)
                                                }

                                            }}


                                            className='inputchex'/>
                                    </div>
                                    <Image src={melat} className='bakpick2' alt=''/>

                                </div>


                                <div className='divtiktik'>
                                    <div className='tiktik'>
                                        <div

                                            style={{background: box3 === false ? '#E0E0E0' : '#07D95A'}}
                                            onClick={() => {
                                                if (box3 === false) {
                                                    setbox3(true)
                                                    setbox(false)
                                                    setbox2(false)
                                                    setbox4(false)
                                                } else if (box3 === true) {

                                                    setbox(true)
                                                    setbox2(true)
                                                    setbox4(true)
                                                }

                                            }}


                                            className='inputchex'/>
                                    </div>

                                    <Image src={up} className='bakpick3' alt=''/>

                                </div>
                                <div className='divtiktik'>
                                    <div className='tiktik'>
                                        <div
                                            style={{background: box4 === false ? '#E0E0E0' : '#07D95A'}}
                                            onClick={() => {
                                                if (box4 === false) {
                                                    setbox4(true)
                                                    setbox(false)
                                                    setbox2(false)
                                                    setbox3(false)
                                                } else if (box4 === true) {

                                                    setbox(true)
                                                    setbox2(true)
                                                    setbox3(true)
                                                }

                                            }}


                                            className='inputchex'/>
                                    </div>

                                    <Image src={parsian} className='bakpick4' alt=''/>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='recht'>
                        <div className='tabel'>
                            <div className='tabel2'>
                                <div className='tabel2v'>
                                    <p className='ghymmat'>
                                        قیمت تفریحات
                                    </p>
                                    <p className='ghymmat'>
                                        جمع سبد خرید
                                    </p>
                                </div>
                                <div className='tabel2v2'>
                                    <div className='duvvghymmat'>
                                        <div className='kghymmat'>

                                        </div>
                                        <p className='ghymmat'>
                                            2×645,000
                                        </p>

                                    </div>

                                    <div className='duvvghymmat'>
                                        <div className='kghymmat2'>

                                        </div>
                                        <p className='gghymmat'>
                                            1,308,000 تومان
                                        </p>
                                    </div>

                                </div>
                            </div>

                            <div className='tabel3'>


                                <button className='tabelbuuton' onClick={()=>{


                                      if (counter >0){
                                          
                                          router.push('/bill')

                                      }






                                }}>


                                    <p className='ppardakht'>
                                        پرداخت
                                    </p>
                                </button>

                            </div>
                        </div>

                        <p className='pipradkht'>
                            هزینه این رزرو هنوز پرداخت نشده و در صورت پر شدن ساعت های خالی، از سبد خرید شما حذف می شود.
                        </p>

                    </div>


                </div>
                <div className='tafrihatdaryayi'>
                    <div className='tafrihatdaryayi90'>
                        <p className='ptafrihh'>
                            تفریحات مرتبط
                        </p>
                    </div>
                </div>
                <div className='divscroll'>

                    <div className='divscroll2'>
                        <NUka/>
                    </div>

                </div>
                <div className='santakhar'>

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