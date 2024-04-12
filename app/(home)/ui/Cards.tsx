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
                                    <div className='w-full text-center mt-3'>
                                    <ButtonGroup variant="contained" aria-label="Basic button group" className=' mx-auto'>
                                      <Button > 
                                        <a title={"Telegramm"} href={"https://t.me/+79020970101"} target="_blank">
                                                <Image src={"/img/icons8-telegram.svg"} width='44' height='44' alt='phone' />
                                        </a>
                                        </Button>
                                      <Button>
                                         <a title={"Whatsapp"} href={"https://wa.me/+79020970101"} target="_blank">
                                                <Image src={"/img/icons8-whatsapp.svg"} width='48' height='48' alt='phone' />
                                        </a>
                                     
                                      </Button>
                                      <Button>
                                        <a title={"phone"} href={"tel:+79020970101"} target="_blank">
                                                <Image src={"/img/icons8-phone.svg"} width='44' height='44' alt='phone' />
                                        </a>
                                      </Button>
                                    </ButtonGroup>
                                    </div>
                                </Card>
                            {/* </Badge.Ribbon> */}
                        {/* </Link> */}
                    </Col>
                    <Col  span={24} md={6} >
                        {/* <Link href={`/discounts/${item?.id}`}> */}
                            <Badge.Ribbon color="red" text={`Скидка 3%`}>
                                <Card hoverable cover={<img alt="example" src="/img/octavia.jpg" />} >
                                    <Meta title='Тариф: комфорт' description='Shkoda Actavia, Hundai Elantra и аналоги'/>
                                    <div className='w-full text-center mt-3'>
                                    <ButtonGroup variant="contained" aria-label="Basic button group" className=' mx-auto'>
                                      <Button > 
                                        <a title={"Telegramm"} href={"https://t.me/+79020970101"} target="_blank">
                                                <Image src={"/img/icons8-telegram.svg"} width='44' height='44' alt='phone' />
                                        </a>
                                        </Button>
                                      <Button>
                                         <a title={"Whatsapp"} href={"https://wa.me/+79020970101"} target="_blank">
                                                <Image src={"/img/icons8-whatsapp.svg"} width='48' height='48' alt='phone' />
                                        </a>
                                     
                                      </Button>
                                      <Button>
                                        <a title={"phone"} href={"tel:+79020970101"} target="_blank">
                                                <Image src={"/img/icons8-phone.svg"} width='44' height='44' alt='phone' />
                                        </a>
                                      </Button>
                                    </ButtonGroup>
                                    </div>
                                  
                                </Card>
                            </Badge.Ribbon>
                        {/* </Link> */}
                    </Col>
                    <Col  span={24} md={6} >
                        {/* <Link href={`/discounts/${item?.id}`}> */}
                            <Badge.Ribbon color="red" text={`Скидка 8%`}>
                                <Card hoverable cover={<img alt="example" src="/img/camry.jpg" />} >
                                    <Meta title='Тариф: комфорт плюс' description='Toyota Camry и аналоги' />
                                    <div className='w-full text-center mt-3'>
                                    <ButtonGroup variant="contained" aria-label="Basic button group" className=' mx-auto'>
                                      <Button > 
                                        <a title={"Telegramm"} href={"https://t.me/+79020970101"} target="_blank">
                                                <Image src={"/img/icons8-telegram.svg"} width='44' height='44' alt='phone' />
                                        </a>
                                        </Button>
                                      <Button>
                                         <a title={"Whatsapp"} href={"https://wa.me/+79020970101"} target="_blank">
                                                <Image src={"/img/icons8-whatsapp.svg"} width='48' height='48' alt='phone' />
                                        </a>
                                     
                                      </Button>
                                      <Button>
                                        <a title={"phone"} href={"tel:+79020970101"} target="_blank">
                                                <Image src={"/img/icons8-phone.svg"} width='44' height='44' alt='phone' />
                                        </a>
                                      </Button>
                                    </ButtonGroup>
                                    </div>
                                </Card>
                            </Badge.Ribbon>
                        {/* </Link> */}
                    </Col>
                    <Col  span={24} md={6} >
                        {/* <Link href={`/discounts/${item?.id}`}> */}
                            <Badge.Ribbon color="red" text={`Скидка 8%`}>
                                <Card hoverable cover={<img alt="example" src="/img/alf.jpg" />} >
                                    <Meta title='Тариф: минивен (компактвен) от 45р.' description='Toyota Alphard, Hundai H1 и аналоги' />
                                    <div className='w-full text-center mt-3'>
                                    <ButtonGroup variant="contained" aria-label="Basic button group" className=' mx-auto'>
                                      <Button > 
                                        <a title={"Telegramm"} href={"https://t.me/+79020970101"} target="_blank">
                                                <Image src={"/img/icons8-telegram.svg"} width='44' height='44' alt='phone' />
                                        </a>
                                        </Button>
                                      <Button>
                                         <a title={"Whatsapp"} href={"https://wa.me/+79020970101"} target="_blank">
                                                <Image src={"/img/icons8-whatsapp.svg"} width='48' height='48' alt='phone' />
                                        </a>
                                     
                                      </Button>
                                      <Button>
                                        <a title={"phone"} href={"tel:+79020970101"} target="_blank">
                                                <Image src={"/img/icons8-phone.svg"} width='44' height='44' alt='phone' />
                                        </a>
                                      </Button>
                                    </ButtonGroup>
                                    </div>
                                </Card>
                            </Badge.Ribbon>
                        {/* </Link> */}
                    </Col>

            </Row>
            </div>



         
        </>
  );
}
