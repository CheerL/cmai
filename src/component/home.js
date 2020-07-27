import React from 'react';
import { Space, Divider } from 'antd'
import './home.css'

const Home = () => {
    return <div className='home'>
        <div className='home-mask'>
            <Space size='large' direction='vertical' align='center'>
            <Divider className='line' />
            <div className='main-title times-new-roman no-margin'>Center for Mathematical A.I.</div>
            <div className='sub-title times-new-roman no-margin'>Combining mathematical theories and big data for A.I. research</div>
            <Divider className='line' />
            </Space>
        </div>
    </div>
}

export default Home