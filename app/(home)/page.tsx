"use client"
import React , {useEffect, useState} from 'react';
import {
  Row, Col,
  Select,
  Slider, Typography, Space, Flex, type FormProps, Input
} from 'antd';
import { Card, Badge,} from 'antd';
const { Meta } = Card;
import Link from 'next/link';
const cityArray:any = [1200, 1300, 800, 600, 1500, 1800, 1100, 900, 740, 409];
const costOfMetr: any = [20, 30 , 40];
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


export default function Home() {
  const [main, setMain] = useState({tarif: 0, range: 0});
  const [cost, setCost] = useState(0);


  useEffect(() => {
    setCost(costOfMetr[main.tarif] * main.range)

  }, [JSON.stringify(main)])

  return (

        <>
            <div className="flex justify-center ">

                  <div className="w-4/5 my-4 ">
                  <Flex vertical gap={24} className="mt-8">
                        <Select  placeholder="Тариф:" value={main.tarif} 
                        onChange={(value: any) =>
                           setMain({...main, tarif: value})
                        }>
                            <Select.Option value={0}>Эконом (20 руб./км.)</Select.Option>
                            <Select.Option value={1}>Комфорт (30 руб./км.)</Select.Option>
                            <Select.Option value={2}>Минивен (40 руб./км.)</Select.Option>
                        </Select>


                        <Select  placeholder="Маршрут:" 
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
                        <Slider max={2000} min={0} 
                            marks={{
                            0: 'Километраж',
                            1000: '1000 км.',
                            2000: '2000 км.',
                            }} 
                            value={main.range}
                            onChange={(value: any) =>
                              setMain({...main, range: value})
                            }
                        />
                      <div className='text-3xl' >

                      <h2>Цена: {cost}</h2>
                      </div>
                  </Flex>
                  </div>
            </div>




            <Row gutter={[12, 12]}>

                    <Col  span={24} md={8} >
                        {/* <Link href={`/discounts/${item?.id}`}> */}
                            <Badge.Ribbon color="red" text={`Скидка 5%`}>
                                <Card hoverable cover={<img alt="example" src="/img/banner/sol.jpg" />} >
                                    <Meta title='Тариф: эконом' description='Описание' />
                                </Card>
                            </Badge.Ribbon>
                        {/* </Link> */}
                    </Col>
                    <Col  span={24} md={8} >
                        {/* <Link href={`/discounts/${item?.id}`}> */}
                            <Badge.Ribbon color="red" text={`Скидка 3%`}>
                                <Card hoverable cover={<img alt="example" src="/img/banner/cam.jpg" />} >
                                    <Meta title='Тариф: комфорт' description='Описание' />
                                    <ButtonGroup variant="contained" aria-label="Basic button group">
                                      <Button>One</Button>
                                      <Button>Two</Button>
                                      <Button>Three</Button>
                                    </ButtonGroup>
                                </Card>
                            </Badge.Ribbon>
                        {/* </Link> */}
                    </Col>
                    <Col  span={24} md={8} >
                        {/* <Link href={`/discounts/${item?.id}`}> */}
                            <Badge.Ribbon color="red" text={`Скидка 8%`}>
                                <Card hoverable cover={<img alt="example" src="/img/banner/alf.jpg" />} >
                                    <Meta title='Тариф: минивен' description='Описание' />
                                </Card>
                            </Badge.Ribbon>
                        {/* </Link> */}
                    </Col>

            </Row>
        </>
  );
}
