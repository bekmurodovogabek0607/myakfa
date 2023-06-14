

import Container from './Container'
import './style.scss'
import { AppstoreOutlined,  SettingOutlined, HomeOutlined, PieChartOutlined, SnippetsOutlined, PlusSquareOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import {  Drawer } from 'antd';
import AkfaLogo from '../images/akfa.png'
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<a href='/'>Bosh sahifa</a>, 'sub1', <HomeOutlined />),
  getItem(<a href='/buyurtma/app'>Mening buyurmalarim</a>, 'sub5', <SnippetsOutlined />),
  getItem("Buyurtma olish", 'sub7', <PlusSquareOutlined />, [
    getItem('Eshiklar', '71'),
    getItem(<a href={'/deraza/styles'}>Derazalar</a>, '72'),
  ]),
  getItem('Savat', 'sub8', <ShoppingCartOutlined />),
  getItem("Yangi Dizayn qo'shish", 'sub2', <AppstoreOutlined />, [
    getItem('Eshiklar', '5'),
    getItem(<a href={'/allderaza/allstyles'}>Derazalar</a>, '6'),
  ]),
  getItem('Hisobot', 'sub6', <PieChartOutlined />),
  getItem('Sozlamalar', 'sub4', <SettingOutlined />, [
    getItem('Eshik Sozlamalari', '9'),
    getItem('Deraza Sozlamalari', '10'),
    getItem('Tariflar', '10'),
  ]),

];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8'];
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Container>
      <div className='Navbar'>
        <div>
          <img src={AkfaLogo} height={50} width={150} />

        </div>
        <div>
          <i style={{ fontSize: '20px', fontWeight: "bold", cursor: 'pointer' }} onClick={showDrawer} className="fa-solid fa-bars"></i>
        </div>

      </div>

      <Drawer title={<img src={AkfaLogo} height={30} width={100} />} placement="right" onClose={onClose} open={open}>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{ width: '100%' }}
          items={items}
        />
      </Drawer>
    </Container>

  )
}

export default Navbar