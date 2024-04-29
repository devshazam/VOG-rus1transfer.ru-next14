"use client"
import React from 'react';
import {
  Row, Col, Flex
} from 'antd';
import { Card, Badge,} from 'antd';
import Image from 'next/image';
const { Meta } = Card;

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ym from 'react-yandex-metrika';



export default function Home() {
  return (
        <>
            <div id='tarif'>
            <Row gutter={[12, 12]}>

                    <Col  span={24} md={6} >
                        {/* <Link href={`/discounts/${item?.id}`}> */}
                            {/* <Badge.Ribbon color="red" text={`Скидка 5%`}> */}
                                <Card hoverable cover={<img alt="example" src="/img/sol.jpg" />} >
                                    <Meta title='Тариф: эконом' description='Kia Rio, VW Polo, Solaris, Rapid и аналоги' />
                                    <ButtonElements key={1}/>
                                </Card>
                            {/* </Badge.Ribbon> */}
                        {/* </Link> */}
                    </Col>
                    <Col  span={24} md={6} >
                        {/* <Link href={`/discounts/${item?.id}`}> */}
                            <Badge.Ribbon color="red" text={`Скидка 3%`}>
                                <Card hoverable cover={<img alt="example" src="/img/octavia.jpg" />} >
                                    <Meta title='Тариф: комфорт' description='Skoda Octavia, Hyundai Elantra и аналоги'/>
                                    <ButtonElements key={2}/>
                                  
                                </Card>
                            </Badge.Ribbon>
                        {/* </Link> */}
                    </Col>
                    <Col  span={24} md={6} >
                        {/* <Link href={`/discounts/${item?.id}`}> */}
                            <Badge.Ribbon color="red" text={`Скидка 8%`}>
                                <Card hoverable cover={<img alt="example" src="/img/camry.jpg" />} >
                                    <Meta title='Тариф: комфорт плюс' description='Toyota Camry и аналоги' />
                                    <ButtonElements key={3}/>
                                    
                                </Card>
                            </Badge.Ribbon>
                        {/* </Link> */}
                    </Col>
                    <Col  span={24} md={6} >
                        {/* <Link href={`/discounts/${item?.id}`}> */}
                            <Badge.Ribbon color="red" text={`Скидка 8%`}>
                                <Card hoverable cover={<img alt="example" src="/img/alf.jpg" />} >
                                    <Meta title='Тариф: минивэн (компактвен) от 45р.' description='Toyota Alphard, Hyundai H1 и аналоги' />
                                    <ButtonElements key={4}/>
                                </Card>
                            </Badge.Ribbon>
                        {/* </Link> */}
                    </Col>

            </Row>
            </div>
         
        </>
  );
}

function ButtonElements() {
  return(
    <div className='w-full text-center mt-3'>
    <ButtonGroup variant="contained" aria-label="Basic button group" className=' mx-auto'>
      <Button > 
        <a title={"Telegramm"} href={"https://t.me/+79297837333 "} target="_blank" className='phone-ya'>
                <Image src={"/img/telegramm.png"} width='44' height='44' alt='phone' />
        </a>
        </Button>
      <Button>
         <a title={"Whatsapp"} href={"https://wa.me/+79297837333 "} target="_blank" className='phone-ya'>
                <Image src={"/img/whatsapp.png"} width='48' height='48' alt='phone' />
        </a>
     
      </Button>
      <Button>
        <a title={"phone"} href={"tel:+79297837333 "} target="_blank" className='phone-ya'>
                <Image src={"/img/phone.png"} width='44' height='44' alt='phone' />
        </a>
      </Button>
    </ButtonGroup>
    </div>
  );
}

