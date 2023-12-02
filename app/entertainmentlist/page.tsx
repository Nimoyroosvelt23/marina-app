"use client"
import React, {useState} from "react";
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
import vaking from "../image/wake-boarding 1.png";
import Center from "@/components/home-page/Center";
import HederBlog from "../blog/hederblog";

export default function page() {

    return (
        <div className="divkol">

             <HederBlog/>
           
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
                    <div className='pagenation'>

                        <p className='safeghabl2'>
                            صفحه بعد
                        </p>
                        <button className='safeghabl'>
                            ۳
                        </button>
                        <button className='safeghabl'>
                            ۲
                        </button>
                        <button className='safeghabl'>
                            ۱
                        </button>
                        <p className='safeghabl2'>
                            صفحه قبل
                        </p>
                    </div>
                </div>
            </div>
               <Center/>
        </div>
    );
}

