import vaking from '../image/wake-boarding 1.png';
import paro from '../image/paddle-board-01 1.png';
import jetski from '../image/jeski.png';
import ballon from '../image/ballon.png';
import Image from "next/image";
import './card.css'
import {imageExtMimeTypeMap} from "next/dist/lib/mime-type";


export default function Card() {
    const card = [{name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} width='318' height='231' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} width='318' height='231' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} width='318' height='231' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} width='318' height='231' alt=''/>},
    ]
    return (<div className='cartkol'>

        {card.map((item, index) => {
            return (<div>
                <div className='ax'>{item.ax}</div>
                <h3 className='name'>{item.name}</h3>



                    <p className='pp'>
                        قابل استفاده همزمان برای بانوان، آقایان و کودکان
                        <br/>
                        وزن بالای 5 سال
                        <br/>
                        قیمت برای 6 دقیقه پرواز :

                    </p>





            </div>)
        })}
    </div>)


}