import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import HeaderContent from './component/header'
import FooterContent from './component/footer'
import Home from './component/home'
import { Layout } from 'antd';
import 'normalize.css';
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout className='layout'>
      <Header className='header'>
        <HeaderContent logo="CMAI"/>
      </Header>
      <Content>
        <Home />
      </Content>
      <Footer className='footer'>
        <FooterContent />
      </Footer>
    </Layout>
  );
}

export default App;
