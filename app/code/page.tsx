

"use client"

import {useState} from "react";
import styles from "../code/code.module.css";



export default function page() {

    const [code,setcode] = useState<number|string>('')

    const changenumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^([1-4]|[0-9]{0,4})$/;
        if (e.target.value === "" || regex.test(e.target.value)) {

            setcode(
                e.target.value
            )
        }

    }


    return(<div className={styles.body}>

        <div className={styles.bodys}>
             <div className={styles.line1}>
                     <p className={styles.line1p}>
  لطفا کد تایید را وارد نمایید.
                     </p>
             </div>


                   <input value={code} onChange={(e)=>changenumberHandler(e)} placeholder='وارد کردن کد تایید' className={styles.inpunani}/>

            <button onClick={(e)=>{

                  if (code !==''){

                  }


            }} className={styles.buttemm}>


                <h2 className={styles.tbuttem} >ورود</h2>
            </button>


        </div>


    </div>)
}


