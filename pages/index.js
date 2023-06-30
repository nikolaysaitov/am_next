import Link from "next/link";
import Head from "next/head";

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
        <div>
          <Link href="/">Главная</Link>
          <Link href="/users">Пользователи</Link>
        </div>
        <h1>Main page</h1>
      </div>
    </>
  );
}
export default Index;
