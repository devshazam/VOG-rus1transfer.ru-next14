"use client"
import React from 'react';
import {
Flex
} from 'antd';

import Calc from './ui/Calc';
import Cards from './ui/Cards';
import CustomCarousel from "./ui/CustomCarousel"
import Script from 'next/script';

export default function Home() {


  return (

        <>
        <CustomCarousel/>
            <Cards />
            <Calc />


            <div id='map' style={{borderRadius: 5, overflow: 'hidden'}}>
            {/* <Flex vertical gap={24} className="mt-8">
                <img src="/RusTransfer_09-04-2024_15-04-00.jpeg" alt='map' className='rounded-xl hidden md:block'/>
                <img src="/RusTransfer_09-04-2024_15-08-10.jpeg" alt='map' className='rounded-xl md:hidden'/>
  
            </Flex> */} 
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A8b27d2258f8353313fe8e008b812026cc7ad4687c512a9fa954bb2a6c786bd9f&amp;source=constructor" width="100%" height="464" frameBorder="0"></iframe>
            </div>


           



        </>
  );
}
