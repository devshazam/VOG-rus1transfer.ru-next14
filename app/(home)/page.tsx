"use client"
import React , {useEffect, useState} from 'react';
import {
  Row, Col,
  Select,
  Slider, Typography, Space, Flex, type FormProps, Input,
} from 'antd';
import { Card, Badge,} from 'antd';
import Image from 'next/image';
const { Meta } = Card;
import Link from 'next/link';
const cityArray:any = [480, 260, 1000, 720, 1000, 300, 1300, 1254, 620, 480];
const costOfMetr: any = [25, 30 , 42];
const saleValue: any = [5, 3, 6];
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


export default function Home() {
  const [main, setMain] = useState({tarif: 0, range: 480});
  const [cost, setCost] = useState(0);
  const [sale, setsale] = useState(0);


  useEffect(() => {
    setsale(Math.round(costOfMetr[main.tarif] * main.range * saleValue[main.tarif] / 100));
    setCost(Math.round(costOfMetr[main.tarif] * main.range * (100 - saleValue[main.tarif]) / 100))

  }, [JSON.stringify(main)])

  return (

        <>
        <div id="calc" className='mb-6 rounded' style={{backgroundColor: "#f5f5f5;"}} >
                <div className='mt-2 ml-2'><h2 className='text-2xl '>Калькулятор:</h2></div>


            <div className="flex justify-center " >

                  <div className="w-4/5 my-4 ">
                  <Flex vertical gap={24} className="mt-8">
                        <Select  placeholder="Тариф:" value={main.tarif} 
                        onChange={(value: any) =>
                           setMain({...main, tarif: value})
                        }>
                            <Select.Option value={0}>Эконом (25 руб./км. + 5% скидка)</Select.Option>
                            <Select.Option value={1}>Комфорт (30 руб./км. + 3% скидка)</Select.Option>
                            <Select.Option value={2}>Минивен (42 руб./км. + 6% скидка)</Select.Option>
                        </Select>


                        <Select  placeholder="Маршрут:" defaultValue={0}
                            onChange={(value: any) =>
                          setMain({...main, range: cityArray[value]})
                        }>
                            <Select.Option value={0}>Волгоград ↔️ Ростов</Select.Option>
                            <Select.Option value={1}>Волгоград ↔️ Волгодонск</Select.Option>
                            <Select.Option value={2}>Волгоград ↔️ Сочи</Select.Option>
                            <Select.Option value={3}>Волгоград ↔️ Донецк</Select.Option>
                            <Select.Option value={4}>Волгоград ↔️ Москва</Select.Option>
                            <Select.Option value={5}>Волгоград ↔️ Элиста</Select.Option>
                            <Select.Option value={6}>Ростов ↔️ Самара</Select.Option>
                            <Select.Option value={7}>Ростов ↔️ Элиста</Select.Option>
                            <Select.Option value={8}>Ростов ↔️ Астрахань</Select.Option>
                            <Select.Option value={9}>Ростов ↔️ Мин. Воды</Select.Option>
                        </Select>
                        


                    {/* Срок */}
                        <Slider max={5000} min={0} 
                            marks={{
                            0: 'Километраж',
                            2500: '2500 км.',
                            5000: '5000 км.',
                            }} 
                            value={main.range}
                            onChange={(value: any) =>
                              setMain({...main, range: value})
                            }
                        />
                      <div className='flex justify-center '>
                            <div className='w-1/2 box-border text-left' >
                                <h2 className='text-xl'>Цена: {cost}руб.</h2>
                            </div>
                            <div className='w-1/2 box-border text-left'>
                                <h2 className='text-xl'>Скидка: {sale}руб.</h2>
                            </div>
                      </div>
                  </Flex>
                  </div>
            </div>
            </div>



            <div id='tarif'>
            <Row gutter={[12, 12]}>

                    <Col  span={24} md={8} >
                        {/* <Link href={`/discounts/${item?.id}`}> */}
                            <Badge.Ribbon color="red" text={`Скидка 5%`}>
                                <Card hoverable cover={<img alt="example" src="/img/banner/sol.jpg" />} >
                                    <Meta title='Тариф: эконом' description='Низкие цены, подача в срок!' />
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
                    <Col  span={24} md={8} >
                        {/* <Link href={`/discounts/${item?.id}`}> */}
                            <Badge.Ribbon color="red" text={`Скидка 3%`}>
                                <Card hoverable cover={<img alt="example" src="/img/banner/cam.jpg" />} >
                                    <Meta title='Тариф: комфорт' description='Комфорт и качество!'/>
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
                    <Col  span={24} md={8} >
                        {/* <Link href={`/discounts/${item?.id}`}> */}
                            <Badge.Ribbon color="red" text={`Скидка 8%`}>
                                <Card hoverable cover={<img alt="example" src="/img/banner/alf.jpg" />} >
                                    <Meta title='Тариф: минивен' description='Вместимость и дешевизна!' />
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

            <div id='map'>
            <Flex vertical gap={24} className="mt-8">
                <img src="/RusTransfer_09-04-2024_15-04-00.jpeg" alt='map' className='rounded-xl hidden md:block'/>
                <img src="/RusTransfer_09-04-2024_15-08-10.jpeg" alt='map' className='rounded-xl md:hidden'/>
  
            </Flex>
            </div>


            <div className='p-4'>

            <Row gutter={[12, 12]}>
                <Col  span={24} md={6} >
                <ul>
                    <li><a>Самара</a></li>
                    <li><a>Волгоград</a></li>
                    <li><a>Волгодонск</a></li>
                </ul>
                </Col>
                <Col  span={24} md={6} >
                <ul>
                    <li><a>Луганск</a></li>
                    <li><a>Москва</a></li>
                    <li><a>Донецк</a></li>
                </ul>

                </Col>
                <Col  span={24} md={6} >
                <ul>
                    <li><a>Ростов на Дону</a></li>
                    <li><a>Астрахань</a></li>
                    <li><a>Миниральные Воды</a></li>
                    {/* <li>Элиста</li> */}
                </ul>

                </Col>
                <Col  span={24} md={6} >
                <ul>
                    <li><a>Элиста</a></li>
                    <li><a>Сочи</a></li>

                </ul>

                </Col>
            </Row>
            </div>
        </>
  );
}
