"use client"
import { useEffect , useState} from 'react';
import {Carousel, Image} from 'react-bootstrap';

const imgArray = [["phone", "tel:+79093802519", '/img/phone.png'], ["Telegramm", "https://t.me/kopiprint34", '/img/telegramm.png'], ["Whatsapp", "https://wa.me/79200000000?text=Сайт", '/img/whatsapp.png']]


export default function Contacts() {
  const [img, setImg] = useState(3)

  useEffect(() => {
      setTimeout(() =>{setImg(img + 1)}, 3000)

  }, [img])

  return (

        <div className='fixed bottom-10 right-10 w-content'>
          <a title={imgArray[img % 3][0]} href={imgArray[img % 3][1]} target="_blank">
            <Image src={imgArray[img % 3][2]} className='w-20 h-20'/>
          </a>
        </div>

   
  );
};
