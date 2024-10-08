"use client"
import { useEffect , useState} from 'react';
import {Carousel, Image} from 'react-bootstrap';
// import ym from 'react-yandex-metrika';

const imgArray = [["phone", "tel:+79020970101 ", '/icons8-phone-100.png'], ["Telegramm", "https://t.me/+79020970101 ", '/icons8-telegram-100.png'], ["Whatsapp", "https://wa.me/+79020970101 ", '/icons8-whatsapp-100.png']]


export default function Contacts() {
  const [img, setImg] = useState(3)

  useEffect(() => {
      setTimeout(() =>{setImg(img + 1)}, 3000)

  }, [img])

  return (

        <div className='fixed bottom-10 right-10 w-content' >
          <a title={imgArray[img % 3][0]} href={imgArray[img % 3][1]} target="_blank" className='phone-ya'
          // onClick={()=>{
          //   ym('reachGoal','click-phone')
          // }}
          >
            <Image src={imgArray[img % 3][2]} className='w-20 h-20' alt='phone'/>
          </a>
        </div>

   
  );
};
