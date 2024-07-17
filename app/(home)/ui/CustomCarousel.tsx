"use client"
import { Carousel , Image} from 'antd';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
export default function CustomCarousel() {

  return (
    <>
    <div  className=" mb-6 main-ban  hidden md:block">
      
      <div className='wrapp-text-banner'>
        <h1 className='h1-banner'>Междугороднее <br></br><i>экспресс такси</i> </h1>
        <p className='text-banner'>Мы осуществляем дальние пассажирские перевозки <br></br>(трансфер) в любые точки России<br></br> + новые территории!</p>

      </div>
  </div>
    <div  className=" mb-6 main-ban-mobile md:hidden">
      <div className='back-wrap'></div>
      <div className='wrapp-text-banner-mobile'>
        <h1 className='h1-banner-mobile'>Междугороднее <br></br><i>экспресс такси</i> </h1>
        <p className='text-banner-mobile'>Мы осуществляем дальние пассажирские перевозки (трансфер) в любые точки России + новые территории!</p>

      </div>
  </div>
      {/* <img src="/RusTransfer_09-04-2024_15-04-00.jpeg" alt='map' className='rounded-xl hidden md:block'/>
      <img src="/RusTransfer_09-04-2024_15-08-10.jpeg" alt='map' className='rounded-xl md:hidden'/> */}
      </>
  );
};
