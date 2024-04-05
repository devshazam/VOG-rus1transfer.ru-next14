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
    <Carousel autoplay >
    <div>
      {/* <h3 style={contentStyle}>1</h3> */}
      <Image src="/img/banner/taxi.jpg" className='rounded-md'/>
    </div>
    <div>
      <Image src="/img/banner/taxi.jpg" />
    </div>
  </Carousel>
  </div>
  );
};
