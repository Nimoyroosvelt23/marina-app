
"use client"
import { useRouter } from 'next/navigation'
import styles from "./login.module.css";
import {useState} from "react";
import {router} from "next/client";




export default function page() {

    const router = useRouter()

   const [number,setnumber] = useState<number|string>('')

    const changenumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^([1-4]|[0-9]{0,11})$/;
        if (e.target.value === "" || regex.test(e.target.value)) {

            setnumber(
                e.target.value
            )
        }

    }




    return(<div className={styles.body}>

          <div className={styles.bodys}>

                 <div className={styles.khat1}>
                          <p className={styles.pkhataval}>
                             خوش امدید
                          </p>
                 </div>
              <div className={styles.yakkhatdivim}>
                  <div className={styles.khat2}>

                  <div className={styles.pkhatdovom}>

                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6531 14H16.9934C16.8185 15.1036 15.6815 17.2357 12.6531 17.2357C10.0401 17.2357 7.90816 15.1143 7.90816 12.5C7.90816 9.88571 10.0401 7.76429 12.6531 7.76429C14.1399 7.76429 15.1348 8.38571 15.7034 8.92143L17.7806 6.96071C16.4468 5.73929 14.7194 5 12.6531 5C8.42201 5 5 8.35357 5 12.5C5 16.6464 8.42201 20 12.6531 20C17.07 20 20 16.9571 20 12.6714C20 12.1786 19.9453 11.8036 19.8797 11.4286H12.6531V14Z" fill="#393939"/>
                      </svg>

                      <p className={styles.pkhatdovom2}>
                          ورود با گوگل
                      </p>
                  </div>

                    </div>

                      <div className={styles.fasele}>

                      </div>
                      <div className={styles.yay}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="346" height="1" viewBox="0 0 346 1" fill="none">
                              <path d="M0 0.5H128M218 0.5H346" stroke="#CBCBCB"/>

                          </svg>


                          <p className={styles.yayp}>
                              یا
                          </p>


                      </div>


              </div>

                  <div className={styles.divdivinput}>
                  <input value={number}   onChange={(e  )=>changenumberHandler(e)}  className={styles.inpun} placeholder='شماره موبایل'/>
                   </div>
                <div className={styles.divbuttom}>


                 <button onClick={(e)=>{
                     if (number !==''){
                         router.push('/code')
                     }
                 }} className={styles.buttemm}>

                     <p className={styles.tbuttem} >دریافت کد تایید</p>
                 </button>

          </div>

          </div>


          </div>)
}
