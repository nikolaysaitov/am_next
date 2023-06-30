import NextNProgress from "nextjs-progressbar";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import Link from "next/link";
const items = [
    {
      label: <Link href="/">Главная</Link>,
      key: 'main',
      icon: <MailOutlined />,
    },
    {
       
      label: <Link href="/users">Товары</Link>,
      key: 'SubMenu',
      icon: <SettingOutlined />,
    },
  ];


export default function App({ Component, pageProps }) {
    const [current, setCurrent] = useState('main');
    const onClick = (e) => {
  
      setCurrent(e.key);
    };
  
  return (
    <><Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      <NextNProgress color="#fb8817" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <Component {...pageProps} />
    </>
  );
}
