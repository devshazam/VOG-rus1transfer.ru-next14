"use client"
import ResponsiveAppBar from "./ui/ResponsiveAppBar"
import Container from '@mui/material/Container';

import Contacts from "./ui/Contacts"
import { Breadcrumb, Layout, Menu, theme,   Row, Col, List } from 'antd';
const { Header, Content, Footer } = Layout;
// import { YMInitializer } from 'react-yandex-metrika';


export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
<>
         <Layout>
          <div className="lg:w-4/5 lg:m-auto">
      <Header style={{ display: 'flex', alignItems: 'center', height: 'auto' }}>
      <ResponsiveAppBar />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
            
            {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
      <div className='p-4'>

<Row gutter={[12, 12]}>
    <Col  span={24} md={6} >
    <ul>
        <li><a href="/rss/">Самара</a></li>
        <li><a href="/vgr/">Волгоград</a></li>
        <li><a href="/vgv/">Волгодонск</a></li>
        <li>Санкт_Петербург</li>
    </ul>
    </Col>
    <Col  span={24} md={6} >
    <ul>
        <li><a href="/vgm/">Москва</a></li>
        <li><a href="/vgd/">Донецк (ДНР)</a></li>
        <li><a href="/rsm/">Миниральные Воды</a></li>
        <li>Новосибирск</li>
    </ul>

    </Col>
    <Col  span={24} md={6} >
    <ul>
        <li><a href="/vgr/">Ростов-на-Дону</a></li>
        <li><a href="/rsa/">Астрахань</a></li>
        <li>Хабаровск</li>
        <li>Краснодар</li>
        {/* <li>Элиста</li> */}
    </ul>

    </Col>
    <Col  span={24} md={6} >
    <ul>
        <li><a href="/vge/">Элиста</a></li>
        <li><a href="/vgs/">Сочи</a></li>
        <li>Красноярск</li>
        <li>Крым</li>

    </ul>

    </Col>
</Row>
</div>
<p>Работаем с корпоративными клиентами</p>
        <div>
        Разработано в <a href="https://kopi34.ru/">kopi34.ru</a> ©2024
        </div>
      </Footer>
      </div>
    </Layout>
      <Contacts />
      {/* <YMInitializer accounts={[97029123]} /> */}
          </>


  );
}
