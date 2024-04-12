"use client"
import React from 'react';
import {
Flex
} from 'antd';

import Calc from './ui/Calc';
import Cards from './ui/Cards';
import CustomCarousel from "./ui/CustomCarousel"

export default function Home() {


  return (

        <>
        <CustomCarousel/>
            <Calc />

            <Cards />

            <div id='map'>
            <Flex vertical gap={24} className="mt-8">
                <img src="/RusTransfer_09-04-2024_15-04-00.jpeg" alt='map' className='rounded-xl hidden md:block'/>
                <img src="/RusTransfer_09-04-2024_15-08-10.jpeg" alt='map' className='rounded-xl md:hidden'/>
  
            </Flex>
            </div>


         
        </>
  );
}
