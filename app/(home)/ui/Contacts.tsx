"use client"
import { useEffect , useState} from 'react';
import {Carousel, Image} from 'react-bootstrap';
import ym from 'react-yandex-metrika';

const imgArray = [["phone", "tel:+79297837333 ", '/img/phone.png'], ["Telegramm", "https://t.me/+79297837333 ", '/img/telegramm.png'], ["Whatsapp", "https://wa.me/+79297837333 ", '/img/whatsapp.png']]


export default function Contacts() {
  const [img, setImg] = useState(3)

  useEffect(() => {
      setTimeout(() =>{setImg(img + 1)}, 3000)

  }, [img])

  return (

        <div className='fixed bottom-10 right-10 w-content'>
          <a title={imgArray[img % 3][0]} href={imgArray[img % 3][1]} target="_blank" className='phone-ya'
          // onClick={()=>{
          //   ym('reachGoal','click-phone')
          //   console.log('click');
          // }}
          >
            <Image src={imgArray[img % 3][2]} className='w-20 h-20' alt='phone'/>
          </a>
        </div>

   
  );
};
