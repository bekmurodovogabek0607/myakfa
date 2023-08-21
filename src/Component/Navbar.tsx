

import Container from './Container'
import './style.scss'
import {  SettingOutlined, HomeOutlined, PieChartOutlined, SnippetsOutlined, PlusSquareOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useContext, useState } from 'react';
import { Drawer } from 'antd';
import AkfaLogo from '../images/akfa.png'
import { Link } from 'react-router-dom';
import { Context } from '../utils/Context';
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
  getItem(<Link to='/'>Bosh sahifa</Link>, 'sub1', <HomeOutlined />),
  getItem(<Link to='/myorder'>Mening buyurmalarim</Link>, 'sub5', <SnippetsOutlined />),
  getItem("Buyurtma olish", 'sub7', <PlusSquareOutlined />, [
    getItem(<Link to="/myeshik">Eshiklar</Link>, '71'),
    getItem(<Link to={'/myderaza'}>Derazalar</Link>, '72'),
  ]),
  getItem(<Link to="/cart">Savat</Link>, 'sub8', <ShoppingCartOutlined />),
  
  getItem(<Link to="/report">Hisobot</Link>, 'sub6', <PieChartOutlined />),
  getItem('Sozlamalar', 'sub4', <SettingOutlined />, [
    getItem("Mahsulotlar", '9', <SettingOutlined />, [
      getItem(<Link to="/setting/deraza">Deraza Sozlamalari</Link>, '91'),
      getItem(<Link to="/setting/eshik">Eshik Sozlamalari</Link>, '91'),
      getItem(<Link to="/setting/deraza">Fortichka Sozlamalari</Link>, '92'),
      getItem(<Link to="/setting/deraza">Maxsus dizayn Sozlamalari</Link>, '93'),

    ]),

    getItem(<Link to="/setting/tarif">Tariflar</Link>, '10'),
    getItem(<Link to="/setting/productprice">Tavar</Link>, '11'),
    getItem(<Link to="/setting/productprice">Shaxsiy Kabinet</Link>, '12'),


  ]),

];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8'];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const props = useContext(Context)
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

      <Drawer title={<div style={{ width: '100%', display: 'flex', alignItems: "center", justifyContent: "space-between" }}><img src={AkfaLogo} height={30} width={100} /><h4 style={{ padding: "0", margin: '0' }}>{props?.User.name}</h4></div>} placement="right" onClose={onClose} open={open}>
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