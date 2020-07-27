import React from 'react'
import { Menu, Dropdown } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import './header.css'

const HeaderContent = () => {
  const logo = {
    link: '/',
    text: <p className='logo-text no-margin'>
      <span className='logo-prefix'>
        Center for Mathematical Artificial Intelligence
      </span> · CMAI
    </p>
  }
  const menu_info = [
    {
      link: '/about',
      text: 'About CMAI'
    },
    {
      link: '/people',
      text: 'People'
    },
    {
      link: '/projects',
      text: 'Projects'
    },
    {
      link: '/publications',
      text: 'Publications'
    },
    {
      link: '/seminar',
      text: 'Seminar/Talks'
    },
    {
      link: '/news',
      text: 'News'
    },
    {
      link: '/contact',
      text: 'Contact'
    }
  ]
  const menu = (<Menu>
    {
      menu_info.map(menu_item => {
        console.log(menu_item)
        return <Menu.Item key={menu_item.text}>
          {/* <a href={menu_item.link}> */}
          <a href='/#'>
            {menu_item.text}
          </a>
        </Menu.Item>
      })
    }
  </Menu>)

  return <div className="header-box">
    <div className="logo-box">
      <div className="logo">
        {/* <a href={logo.link}> */}
        <a href='/#'>
          {logo.text}
        </a>
      </div>
    </div>
    <Dropdown overlay={menu}>
      <a onClick={e => e.preventDefault()} href='/#'>
        <MenuOutlined />
      </a>
    </Dropdown>
  </div>
}

export default HeaderContent
