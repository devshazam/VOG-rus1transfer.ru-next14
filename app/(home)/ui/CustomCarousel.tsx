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
    <div  className="hidden md:block">
      <Image src="/main.jpg" className='rounded-md w-full' preview={false} alt='map'/>
    {/* <Carousel autoplay >
    <div>
      <Image src="/banner.jpg" className='rounded-md w-full' preview={false}/>
    </div>
    <div>
      <Image src="/img/banner/taxi.jpg" />
    </div>
  </Carousel> */}
  </div>
  );
};
