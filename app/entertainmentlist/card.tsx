"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react';
import vaking from '../image/wake-boarding 1.png';
import paro from '../image/paddle-board-01 1.png';
import jetski from '../image/jeski.png';
import ballon from '../image/ballon.png';
import Image from "next/image";

import './card.css'
export default function Card() {

const router = useRouter()

    const card = [{name: 'ویک بوردینگ', ax: <Image className='ax' src={vaking}  width='301' height='200' alt=''/>},
        {name: 'پدل بورد', ax: <Image className='ax' src={paro} width='301' height='200' alt=''/>},
        {name: 'جت اسکی', ax: <Image className='ax' src={jetski} width='301' height='200' alt=''/>},
        {name: 'پاراسیل', ax: <Image className='ax' src={ballon} width='301' height='200' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image className='ax' src={vaking} width='301' height='200' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image className='ax' src={vaking} width='301' height='200' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} className='ax' width='301' height='200' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image className='ax' src={vaking} width='301' height='200' alt=''/>},
        {name: 'پاراسیل', ax: <Image className='ax' src={ballon} width='301' height='200' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image className='ax' src={vaking} width='301' height='200' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image className='ax' src={vaking} width='301' height='200' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} className='ax' width='301' height='200' alt=''/>},

]
    return (<div className='bodys' >
        {card.map((item, index) => {
                       if (index < 8){

                       }
            return (<div key={index} className='cartkol' >

                <div className='ax'>{item.ax}</div>
                <div className='divnam'>
                    <p className='name'>{item.name} </p>
                </div>
                    <p className='pp'>
                        قابل استفاده همزمان برای بانوان، آقایان و کودکان
                        <br/>
                        وزن بالای 5 سال
                        <br/>
                        قیمت برای 6 دقیقه پرواز :
                    </p>
                <div className='divghtmmat'>
                    <p className='ghymat'>
                        ۶۴۵,۰۰۰
                    </p>
                    <p className='toman'>تومان</p>
                </div>
                <button onClick={()=>{
                    
    

                        router.push('/panel')
                   
    
                          

                }} className='buttabi'>
                    <p className='afzodan'>
                        افزودن به سبد خرید
                    </p>
                </button>


            </div>)
        })}

    </div>)


}