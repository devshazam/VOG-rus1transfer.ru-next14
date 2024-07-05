"use client"
import ResponsiveAppBar from "./ui/ResponsiveAppBar"
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Contacts from "./ui/Contacts"
import { Breadcrumb, Layout, Menu, theme,   Row, Col, List } from 'antd';
const { Header, Content, Footer } = Layout;
// import { YMInitializer } from 'react-yandex-metrika';
const themes = createTheme({
  palette: {
    primary: {
      main: "#78797d",
      // main: red[500],
    },
  },
});

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
<ThemeProvider theme={themes}>
         <Layout>
          <div className="lg:w-4/5 lg:m-auto">
      <Header style={{ display: 'flex', alignItems: 'center', height: 'auto' }}>
      <ResponsiveAppBar />
      </Header>
      <Content>
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
      {/* <div className='p-4'></div>  */}

<Row gutter={[12, 12]}>
    <Col  span={24} md={6} >
    <ul>
        <li><b>Контакты:</b></li>
        <li><a title={"phone"} href={"tel:+79020970101"} >+79020970101</a></li>
        <li><a title={"phone"} href={"tel:+79020970101"} >+79020970101</a></li>
        {/* <li>Работаем по всей России (ДНР + ЛНР)</li> */}
    </ul>
    </Col>
    <Col  span={24} md={6} >
    <ul>
        <li><a href="/vgm/">Москва</a></li>
        <li><a href="/vgd/">Донецк (ДНР)</a></li>
        <li><a href="/rsm/">Миниральные Воды</a></li>
        {/* <li>Новосибирск</li> */}
        <li><a href="/rss/">Самара</a></li>
    </ul>

    </Col>
    <Col  span={24} md={6} >
    <ul>
        <li><a href="/vgr/">Ростов-на-Дону</a></li>
        <li><a href="/rsa/">Астрахань</a></li>
        <li><a href="/vgr/">Волгоград</a></li>
        <li>Хабаровск</li>
        {/* <li>Краснодар</li> */}
    </ul>

    </Col>
    <Col  span={24} md={6} >
    <ul>
        <li><a href="/vge/">Элиста</a></li>
        <li><a href="/vgs/">Сочи</a></li>
        <li><a href="/vgv/">Волгодонск</a></li>
        <li>Крым</li>

    </ul>

    </Col>
</Row>

<p>Работаем с корпоративными клиентами</p>
        <div>
        Разработано в <a href="https://kopi34.ru/">kopi34.ru</a> ©2024
        </div>
      </Footer>
      </div>
    </Layout>
      <Contacts />
      {/* <YMInitializer accounts={[97029123]} /> */}
      </ThemeProvider>
          </>


  );
}
