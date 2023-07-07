

import Head from "next/head";
import { Typography } from "antd";
const { Title } = Typography;
function Index() {

  return (
    <>
      <Head>
        <meta keywords="Метатэги от Next js" content="website" />
        <meta property="og:title" content="SUNNY PLUS 1600х2000 " />
        <meta property="og:description" content="матрас" />
        <meta property="og:image" content="https://azbykamebeli.ru/upload/iblock/8d8/8d815816276103cd080907a20e61529f.jpg" />
        <meta property="og:url" content="https://azbykamebeli.ru/catalog/dvuspalnye/1022598/?offerId=1023591" />
      </Head>
      <div>
        <Title level={2}>Тестовый сайт на next js</Title>
        <p>Страница с товарами и каждая отдельная страница с товаром рендерятся на сервере, что положительно влияет на SEO</p>
        <p>Для проверки микроразметки можно воспользоваться <a href="https://schema.org/">schema.org</a>, используя url страницы с товарами/товара данного сайта</p>
      </div>
    </>
  );
}
export default Index;
