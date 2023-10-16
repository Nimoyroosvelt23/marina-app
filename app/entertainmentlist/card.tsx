import vaking from '../image/wake-boarding 1.png';
import paro from '../image/paddle-board-01 1.png';
import jetski from '../image/jeski.png';
import ballon from '../image/ballon.png';
import Image from "next/image";
import './card.css'
import {imageExtMimeTypeMap} from "next/dist/lib/mime-type";


export default function Card() {
    const card = [{name: 'ویک بوردینگ', ax: <Image className='ax' src={vaking}  width='301' height='200' alt=''/>},
        {name: 'پدل بورد', ax: <Image className='ax' src={paro} width='301' height='200' alt=''/>},
        {name: 'جت اسکی', ax: <Image className='ax' src={jetski} width='301' height='200' alt=''/>},
        {name: 'پاراسیل', ax: <Image className='ax' src={ballon} width='301' height='200' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image className='ax' src={vaking} width='301' height='200' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image className='ax' src={vaking} width='301' height='200' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} className='ax' width='301' height='200' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} className='ax' width='301' height='200'  alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} className='ax' width='301' height='200'  alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking}  className='ax' width='301' height='200' alt=''/>},
        {name: 'پدل بورد', ax: <Image src={paro} className='ax' width='301' height='200'  className='ax' alt=''/>},
        {name: 'جت اسکی', ax: <Image src={jetski} className='ax' width='301' height='200' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon} className='ax' width='301' height='200' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image className='ax' src={vaking} width='301' height='200' alt=''/>},
        {name: 'پدل بورد', ax: <Image className='ax'  src={paro} width='301' height='200' alt=''/>},
        {name: 'جت اسکی', ax: <Image className='ax'  src={jetski} width='301' height='200' alt=''/>},
        {name: 'پاراسیل', ax: <Image src={ballon}className='ax' width='301' height='200' alt=''/>},
        {name: 'ویک بوردینگ', ax: <Image src={vaking} className='ax' width='301' height='200' alt=''/>}

]
    return (<div className='bodys' >
        {card.map((item, index) => {
            return (<div  className='cartkol' >

                <div className='ax'>{item.ax}</div>
                <h3 className='name'>{item.name}

                    <p className='pp'>
                        قابل استفاده همزمان برای بانوان، آقایان و کودکان
                        <br/>
                        وزن بالای 5 سال
                        <br/>
                        قیمت برای 6 دقیقه پرواز :
                    </p>
                </h3>

                <div className='divghtmmat'>
                    <p className='ghymat'>
                        654,000
                    </p>
                    <p className='toman'>تومان</p>
                </div>
                <button className='buttabi'>
                    <p className='afzodan'>
                        افزودن به سبد خرید
                    </p>
                </button>
            </div>)
        })}
    </div>)


}