"use client"
import Link from 'next/link'
import React, {useState} from "react";
import './bill.css'
import line from '../image/Line 18.png'
import ghaygh from  '../image/ghaygh.png'
import fishe from  '../image/barcodepng.parspng 1.png';

import Image from "next/image";

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
                    <h1 className='taknafare'>رزرو شما با موفقیت ثبت گردید! </h1>
                </div>
                <div className='bala2'>
                    <p className='taknafare2'>با تشکر از حسن انتخاب شما.</p>
                </div>
                <div className='bbbody'>


                       <div className='bill'>
                                <div className='divbill1'>
                                       <Image className='axghaygh' src={ghaygh} alt=''/>
                                </div>
                                 <div className='divbill2'>
                                    <div className='bibipedal' >
                                        <p className='pedaldiv' >پدل بورد</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M15 6L9 12L15 18" stroke="#393939" stroke-width="2"/>
                                        </svg>
                                    </div>
                                 </div>
                                  <div className='divbill3'>
                                       <p className='ptype'>سه شنبه، 25 خرداد، سانس 17:20</p>
                                      <p className='ptype'>زمان مجاز استفاده از وسیله : 60 دقیقه</p>
                                      <div className='divpen'>
                                      <p className='ptype'>محل برگزاری : بلوار مرجان، مرجان 7، ساحل مرجان</p>
                                          <div className='linkkk'>
                                              <Link href="/bill" className='mmasir'  >مسیر یابی</Link>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                  <path d="M12.398 17.804L12.8585 18.6917L12.8585 18.6917L12.398 17.804ZM11.602 17.804L11.1415 18.6917L11.1415 18.6917L11.602 17.804ZM18 9C18 11.1458 16.9079 12.9159 15.545 14.2906C14.183 15.6644 12.6342 16.555 11.9376 16.9163L12.8585 18.6917C13.6448 18.2838 15.397 17.2805 16.9653 15.6987C18.5326 14.1178 20 11.8706 20 9H18ZM12 3C15.3137 3 18 5.68629 18 9H20C20 4.58172 16.4183 1 12 1V3ZM6 9C6 5.68629 8.68629 3 12 3V1C7.58172 1 4 4.58172 4 9H6ZM12.0624 16.9163C11.3658 16.555 9.81702 15.6644 8.45503 14.2906C7.09211 12.9159 6 11.1458 6 9H4C4 11.8706 5.46741 14.1178 7.03474 15.6987C8.60299 17.2805 10.3552 18.2838 11.1415 18.6917L12.0624 16.9163ZM11.9376 16.9163C11.9514 16.9091 11.9733 16.9023 12 16.9023C12.0267 16.9023 12.0486 16.9091 12.0624 16.9163L11.1415 18.6917C11.6831 18.9726 12.3169 18.9726 12.8585 18.6917L11.9376 16.9163ZM14 9C14 10.1046 13.1046 11 12 11V13C14.2091 13 16 11.2091 16 9H14ZM12 7C13.1046 7 14 7.89543 14 9H16C16 6.79086 14.2091 5 12 5V7ZM10 9C10 7.89543 10.8954 7 12 7V5C9.79086 5 8 6.79086 8 9H10ZM12 11C10.8954 11 10 10.1046 10 9H8C8 11.2091 9.79086 13 12 13V11Z" fill="#393939"/>
                                                  <path d="M19.7942 17.5C20.5841 17.9561 21 18.4734 21 19C21 19.5266 20.5841 20.0439 19.7942 20.5C19.0043 20.9561 17.8682 21.3348 16.5 21.5981C15.1318 21.8614 13.5798 22 12 22C10.4202 22 8.86817 21.8614 7.5 21.5981C6.13183 21.3348 4.99569 20.9561 4.20577 20.5C3.41586 20.0439 3 19.5266 3 19C3 18.4734 3.41586 17.9561 4.20577 17.5" stroke="#393939" stroke-width="2" stroke-linecap="round"/>
                                              </svg>
                                          </div>

                                  </div>
                                  </div>

                                  <div className='bill4'>

                                  </div>
                                   <div className='bill5' >

                                       <div className='eykdovom'>

                                             <p className='coderezerv'>
                                                 کد رزرو
                                             </p>
                                           <p className='coderezerv'>
                                                ۴۶۸۸۵۲۴۴
                                           </p>
                                       </div>
                                       <div className='dodovom'>

                                            <div className='copydiv'>
                                                <p className='pcopyy'>
                                                    کپی کد
                                                </p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M14 7V7C14 6.06812 14 5.60218 13.8478 5.23463C13.6448 4.74458 13.2554 4.35523 12.7654 4.15224C12.3978 4 11.9319 4 11 4H8C6.11438 4 5.17157 4 4.58579 4.58579C4 5.17157 4 6.11438 4 8V11C4 11.9319 4 12.3978 4.15224 12.7654C4.35523 13.2554 4.74458 13.6448 5.23463 13.8478C5.60218 14 6.06812 14 7 14V14" stroke="#393939" stroke-width="2"/>
                                                    <rect x="10" y="10" width="10" height="10" rx="2" stroke="#393939" stroke-width="2"/>
                                                </svg>
                                            </div>
                                       </div>

                                   </div>
                                   <div className='bill6'>
                                         <Image className='avfishe' src={fishe} alt=''/>
                                   </div>
                           <div className='bill4'>

                           </div>
                           <div className='bill5' >
                               <div className='eykdovom'>
                                   <p className='coderezerv'>
                                       مجموع هزینه
                                   </p>
                                   <p className='coderezerv22'>
                                       بلیت
                                   </p>


                               </div>
                               <div className='dodovom2'>

                                   <p className='tomandiv'>
                                       1,090,000 تومان
                                   </p>
                                   <div className='didivvvvtomani'>

                                       <p className='tomandiv'>
                                           2 عدد
                                       </p>
                                   <p className='tomandiv'>
                                       545,000 تومان
                                   </p>

                               </div>
                               </div>

                           </div>
                       </div>

                      <div className='divpainnnnn'>

                            <div className='divchaap'>
                           <p className='chap'>
                               چاپ رسید
                           </p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 5L11.2929 4.29289L12 3.58579L12.7071 4.29289L12 5ZM13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14L13 14ZM6.29289 9.29289L11.2929 4.29289L12.7071 5.70711L7.70711 10.7071L6.29289 9.29289ZM12.7071 4.29289L17.7071 9.29289L16.2929 10.7071L11.2929 5.70711L12.7071 4.29289ZM13 5L13 14L11 14L11 5L13 5Z" fill="#393939"/>
                                    <path d="M5 16L5 17C5 18.1046 5.89543 19 7 19L17 19C18.1046 19 19 18.1046 19 17V16" stroke="#393939" stroke-width="2"/>
                                </svg>
                      </div>
                          <Link href="/" className='mmasir2'  >باگشت به صفحه اصلی</Link>
                      </div>

                </div>

            </div>
        </div>
    );
}