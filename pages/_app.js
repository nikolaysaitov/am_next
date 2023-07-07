import NextNProgress from "nextjs-progressbar";
import { AppstoreOutlined, MailOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import Link from "next/link";
import styles from "./_app.module.css";
const items = [
  {
    label: <Link href="/">Главная</Link>,
    key: "main",
    icon: <MailOutlined />,
  },
  {
    label: <Link href="/products">Товары</Link>,
    key: "SubMenu",
    icon: <ShoppingOutlined />,
  },
];

export default function App({ Component, pageProps }) {
  const [current, setCurrent] = useState("main");
  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <>
      <Menu className={styles.aaa} onClick={onClick}  mode="horizontal" items={items} style={{ color: "black"}}/>
      <NextNProgress color="#fb8817" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <Component {...pageProps} />
    </>
  );
}
