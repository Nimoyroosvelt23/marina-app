import React from "react";
import './entertainmentl.css';
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
import Card from "./card";

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


                    <h1 className='taknafare'>تفریحات تک نفره</h1>

                </div>
                <div className='bala2'>
                    <p className='taknafare2'>10 مورد یافت شد</p>
                </div>

                <div className='devresultdiv'>
                    <div className='devresult'>


                        <button className='buttonk'><Image src={icon} width='24' height='24' alt=''/> مرتب سازی :
                        </button>

                        <button className='buttonk2'>پر بازدید ترین</button>
                        <button className='buttonk2'>پر فروش ترین</button>
                        <button className='buttonk2'>ارزان ترین</button>
                        <button className='buttonk2'>گران ترین</button>
                        <button className='buttonk3'>پیشنهاد خریداران</button>
                        <button className='buttonk2'>منتخب</button>
                    </div>
                </div>
                <div className="nevshte">


                    <Card/>
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

