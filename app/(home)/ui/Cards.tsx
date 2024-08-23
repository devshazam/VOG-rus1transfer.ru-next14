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
import { Modal } from 'antd';
import {costOfMetr, saleValue} from '@/config/prices';

export default function Home() {
    const [isModalOpen, setIsModalOpen] =  React.useState<any>(false);

    const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };
  return (
        <>
            <div id='tarif' className='mb-6'>
            <Row gutter={[12, 12]}>

                    <Col  span={24} md={6} >
                        {/* <Link href={`/discounts/${item?.id}`}> */}
                            <Badge.Ribbon color="red" text={`Скидка 5%`}>
                                <Card hoverable cover={<img alt="example" src="/img/sol.jpg" className='card-imag-border' />} >
                                    <Meta title={`Тариф стандарт: ${costOfMetr[0]} руб./км.`} description='Kia Rio, VW Polo, Solaris, Rapid и аналоги' />
                                    <div className='w-full text-center mt-3'>
                                        <Button fullWidth  variant="contained" style={{backgroundColor: '#ffd913', color: '#000'}} onClick={showModal}> Вызвать такси
                                        </Button>
                                    </div>
                                </Card>
                            </Badge.Ribbon>
                        {/* </Link> */}
                    </Col>
                    <Col  span={24} md={6} >
                        {/* <Link href={`/discounts/${item?.id}`}> */}
                            <Badge.Ribbon color="red" text={`Скидка 3%`}>
                                <Card hoverable  cover={<img alt="example" src="/img/octavia.jpg" className='card-imag-border'/>} >
                                    <Meta title={`Тариф комфорт: ${costOfMetr[1]} руб./км.`} description='Skoda Octavia, Hyundai Elantra и аналоги'/>
                                    <div className='w-full text-center mt-3'>
                                        <Button fullWidth  variant="contained" style={{backgroundColor: '#ffd913', color: '#000'}} onClick={showModal}> Вызвать такси
                                        </Button>
                                    </div>
                                  
                                </Card>
                            </Badge.Ribbon>
                        {/* </Link> */}
                    </Col>
                    <Col  span={24} md={6} >
                        {/* <Link href={`/discounts/${item?.id}`}> */}
                            <Badge.Ribbon color="red" text={`Скидка 2%`}>
                                <Card hoverable  cover={<img alt="example" src="/img/camry.jpg"  className='card-imag-border'/>} >
                                    <Meta title={`Тариф комфорт+: ${costOfMetr[2]} руб./км.`} description='Toyota Camry и другие премиальные авто.' />
                                    <div className='w-full text-center mt-3'>
                                        <Button fullWidth  variant="contained" style={{backgroundColor: '#ffd913', color: '#000'}} onClick={showModal}> Вызвать такси
                                        </Button>
                                    </div>
                      
                                </Card>
                            </Badge.Ribbon>
                        {/* </Link> */}
                    </Col>
                    <Col  span={24} md={6} >
                        {/* <Link href={`/discounts/${item?.id}`}> */}
                            <Badge.Ribbon color="red" text={`Скидка 6%`}>
                                <Card hoverable cover={<img alt="example" src="/img/alf.jpg"  className='card-imag-border'/>} >
                                    <Meta title={`Тариф минивэн: от ${costOfMetr[3]} руб/км.`} description='Toyota Alphard, Hyundai H1 и аналоги' />
                                    <div className='w-full text-center mt-3'>
                                        <Button fullWidth  variant="contained" style={{backgroundColor: '#ffd913', color: '#000'}} onClick={showModal}> Вызвать такси
                                        </Button>
                                    </div>
                                </Card>
                            </Badge.Ribbon>
                        {/* </Link> */}
                    </Col>

            </Row>
            </div>
            {/* <Modal title="Вызвать такси" open={true} footer={null} onOk={handleOk} onCancel={handleCancel}> */}
            <Modal title="Вызвать такси" open={isModalOpen} footer={null} onOk={handleOk} onCancel={handleCancel}>
                    <div className='w-full text-center mt-3 mb-3'>
                        <h2 style={{ color: '#ff0000', fontSize: "24px"}}>Звоните 24/7</h2>
                        <a title={"phone"} href={"tel:+79020970101 "}  style={{ color: '#000', fontSize: "28px"}} className='phone-ya'>
                                +7 (902) 097-01-01
                        </a>
                        <p style={{ color: '#000', fontSize: "12px"}}>Мы всегда на связи! Мы готовы подъехать в любую точку области и забрать Вас, или доставить посылку. <b>Звоните, Все персонально и анонимно.</b></p>
                    </div>
                    <Button  fullWidth  variant="contained" style={{backgroundColor: '#ffd913', color: '#000'}} className='mb-3'> 
                        <a title={"Telegramm"} href={"https://t.me/+79020970101 "} target="_blank" className='phone-ya'>
                                <Image src={"/img/telegramm.png"} width='44' height='44' alt='phone' style={{display: 'inline-block'}} />{" "}Написать в Telegram
                        </a>
                        </Button>
                    <Button   fullWidth  variant="contained" style={{backgroundColor: '#ffd913', color: '#000'}}  className='mb-3'>
                        <a title={"Whatsapp"} href={"https://wa.me/+79020970101 "} target="_blank" className='phone-ya' >
                                <Image src={"/img/whatsapp.png"} width='48' height='48' alt='phone' style={{display: 'inline-block'}} />{" "}Написать в Whatsapp
                        </a>
                    
                    </Button>
            </Modal>
        </>
  );
}

function ButtonElements() {
  return(
    <div className='w-full text-center mt-3'>
                            <Button fullWidth  variant="contained" style={{backgroundColor: '#ffd913', color: '#000'}} > Вызвать такси
                            </Button>
  
    </div>
  );
}

