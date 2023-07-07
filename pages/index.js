

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
        <p>Для проверки микроразметки можно воспользоваться <a target="_blank" href="https://schema.org/">schema.org</a>, используя url страницы с товарами/товара данного сайта</p>
      </div>
      <div>
        <p>Next.js — фреймворк, использующий библиотеку React. Главное его отличие от «чистого» React — в способе рендера конечных веб-страниц. Если React загружает минимальный HTML и зачастую большой бандл JS (иногда разделенный между страницами на модули), то Next.js использует Server Side Rendering — формирование первоначального HTML на стороне сервера, используя тот же самый React.

В процессе он оптимизирует бандлы так, чтобы не отправлять сразу на клиентскую сторону больше кода, чем действительно необходимо для конкретной страницы, а просто подгружать его позже.</p>
      </div>
    </>
  );
}
export default Index;
