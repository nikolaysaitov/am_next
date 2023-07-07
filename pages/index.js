import Link from "next/link";
import { useRouter } from "next/router";

import Head from "next/head";
import { Typography } from "antd";
const { Title } = Typography;
function Index() {
  const router = useRouter();

  // Проверка наличия кеша
  const isCached = !router.isFallback;

  console.log("Используются кешированные данные:", isCached);
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
        <Title level={2}>Main page</Title>
      </div>
    </>
  );
}
export default Index;
