"use client"
import React , {useEffect, useState} from 'react';
import {
  Select,
  Slider, Flex,  Col, InputNumber, Row,  DatePicker, Input} from 'antd';
  import Button from '@mui/material/Button';

// Config:
const cityArray:any = [480, 260, 1000, 720, 1000, 300, 1300, 1254, 620, 480, 0];
const costOfMetr: any = [25, 28, 35, 42];
const saleValue: any = [0, 3, 3, 6];
const mapArray: any = ['vgr', 'vgv', 'vgs', 'vgd', 'vgm', 'vge', 'rss', 'rse', 'rsa', 'rsm']

type CalcProps = {
  id?: string
}

export default function Calc(props: CalcProps) {
  const [main, setMain] = useState({tarif: 0, range: cityArray[(mapArray.indexOf(props.id) > 0 ? mapArray.indexOf(props.id) : 0)]});
  const [cost, setCost] = useState(0);
  const [sale, setsale] = useState(0);


  useEffect(() => {
    setsale(Math.round(costOfMetr[main.tarif] * main.range * saleValue[main.tarif] / 100));
    setCost(Math.round(costOfMetr[main.tarif] * main.range * (100 - saleValue[main.tarif]) / 100))

  }, [main.tarif, main.range]);

  return (

        <>
        <div id="calc" className='mb-6 rounded' style={{backgroundColor: "#f5f5f5"}} >
                {/* <div className='mt-2 ml-2'><h2 className='text-2xl '>Расчет стоимости:</h2></div> */}


            <div className="flex justify-center " >

                  <div className="w-4/5 my-4 ">
                  <form
                    action="https://formspree.io/f/xanwnzje"
                    method="POST"
                  >
                  <Flex vertical gap={24} className="mt-8">
                        <DatePicker placeholder="Выберите дату поездки" name="date"
                        // onChange={onChange} 
                        />
                        <Input placeholder="Email" name='email' required/>
                        <Select  placeholder="Тариф:" value={main.tarif} 
                  
                        onChange={(value: any) =>
                           setMain({...main, tarif: value})
                        }>
                            <Select.Option value={0}>{`Стандарт (${costOfMetr[0]} руб./км.)`}</Select.Option>
                            <Select.Option value={1}>{`Комфорт (${costOfMetr[1]} руб./км. + 3% скидка)`}</Select.Option>
                            <Select.Option value={2}>{`Комфорт (${costOfMetr[2]} руб./км. + 3% скидка)`}</Select.Option>
                            <Select.Option value={3}>{`Минивен (${costOfMetr[3]} руб./км. + 6% скидка)`}</Select.Option>
                        </Select>


                        <Select  placeholder="Маршрут:" defaultValue={(mapArray.indexOf(props.id) > 0 ? mapArray.indexOf(props.id) : 0)}
                            onChange={(value: any) =>
                          setMain({...main, range: cityArray[value]})
                        }>
                            <Select.Option value={0}>Волгоград ↔️ Ростов-на-Дону</Select.Option>
                            <Select.Option value={1}>Волгоград ↔️ Волгодонск</Select.Option>
                            <Select.Option value={2}>Волгоград ↔️ Сочи</Select.Option>
                            <Select.Option value={3}>Волгоград ↔️ Донецк</Select.Option>
                            <Select.Option value={4}>Волгоград ↔️ Москва</Select.Option>
                            <Select.Option value={5}>Волгоград ↔️ Элиста</Select.Option>
                            <Select.Option value={6}>Ростов ↔️ Самара</Select.Option>
                            <Select.Option value={7}>Ростов ↔️ Элиста</Select.Option>
                            <Select.Option value={8}>Ростов ↔️ Астрахань</Select.Option>
                            <Select.Option value={9}>Ростов ↔️ Мин. Воды</Select.Option>
                            <Select.Option value={10}>Россия и новые территории (произвольный маршрут)</Select.Option>
                        </Select>
                        


                    {/* Срок */}
                        
                           <Row>
                              <Col span={20}>
                              <Slider max={5000} min={0} 
                                  marks={{
                                  0: 'Километраж',
                                  5000: '5000км',
                                  }} 
                                  value={main.range}
                                  onChange={(value: any) =>
                                    setMain({...main, range: value})
                                  }
                              />
                              </Col>
                              <Col span={4}>
                                <InputNumber
                                  min={0}
                                  max={5000}
                                  style={{ margin: '0 16px' }}
                                  value={main.range}
                                  onChange={(value: any) =>
                                    setMain({...main, range: value})
                                  }
                                />
                              </Col>
                            </Row>
                      <div className='flex justify-center '>
                            <div className='w-1/2 box-border text-left' >
                                <h2 className='text-xl'>Цена: {cost}руб.</h2>
                            </div>
                            <div className='w-1/2 box-border text-left'>
                                <h2 className='text-xl'>Скидка: {sale}руб.</h2>
                            </div>
                      </div>
                      <input type="hidden" name="tarif" value={main.tarif} />
                      <input type="hidden" name="range" value={main.range} />
                      <Button fullWidth  variant="contained" style={{backgroundColor: '#ffd913', color: '#000'}} type='submit'>Забронировать
                      </Button>
                  </Flex>
                      </form>
                  </div>
            </div>
            </div>


        </>
  );
}



