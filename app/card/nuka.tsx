"use client"
import './nuka.css'
import Carousel from 'nuka-carousel';
import React, {useState} from 'react';
import vaking from '../image/wake-boarding 1.png';
import paro from '../image/paddle-board-01 1.png';
import jetski from '../image/jeski.png';
import ballon from '../image/ballon.png';
import {useRouter} from 'next/navigation'

import Image from "next/image";

const renderCenterLeftControls = ({previousSlide, currentSlide}) => (
    <button
        className="slider-control-button"
        onClick={previousSlide}
        disabled={currentSlide === 5}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path d="M9 18l6-6-6-6"/>

        </svg>
    </button>
);

const renderCenterRightControls = ({
                                       nextSlide,
                                       currentSlide,
                                       slideCount,
                                       slidesToShow,
                                   }) => {
    console.log(currentSlide, slideCount, slidesToShow);
    return (


        <button

            className="slider-control-button"
            onClick={nextSlide}
            disabled={currentSlide + slidesToShow === slideCount}
        >
            <svg
                xmlns=""
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="M15 18l-6-6 6-6"/>
            </svg>
        </button>
    );
};

function Slider1() {
    const card = [{name: 'ویک بوردینگ', ax: <Image className='ax' src={vaking} width='301' height='200' alt=''/>},
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
    const router = useRouter()

    return (
        <div className="section">

            <Carousel
                slidesToScroll={1}
                slidesToShow={3}
                scrollMode="remainder"
                cellSpacing={10}
                disableEdgeSwiping={false}
                dragging={false}
                renderCenterLeftControls={renderCenterLeftControls}
                renderCenterRightControls={renderCenterRightControls}
            >
                {card.map((item, index) => {

                    return (<div className='bodys'>

                        <div key={index} className='cartkol'>

                            <div className='divbutt'>
                                <div className='ax'>{item.ax}</div>
                            </div>

                            <div className='divnam'>
                                <p className='name'>{item.name} </p>
                            </div>
                            <div className='divbutt'>
                                <p className='pp'>
                                    مدت زمان استفاده 12 دقیقه
                                </p>
                            </div>

                            <div className='divghtmmat'>
                                <p className='ghymat'>
                                    ۶۴۵,۰۰۰
                                </p>
                                <p className='toman'>تومان</p>
                            </div>
                            <div className='divbutt'>
                                <button onClick={() => {


                                    router.push('/')


                                }} className='buttabi'>
                                    <p className='afzodan'>
                                        رزرو
                                    </p>
                                </button>
                            </div>


                        </div>
                    </div>)
                })}
            </Carousel>
        </div>
    );
}


export default function NUka() {
    return (
        <main className="container">
            <Slider1/>
        </main>
    );
}