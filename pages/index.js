import Link from "next/link";
import Head from "next/head";
import https from "https";
import axios from "axios";

import { Buffer } from "buffer";
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

// export async function getStaticProps() {
//     const url = "https://pim.impermebel.ru/offers/api/offers";
  
//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ page: 1, limit: 10, query: "" }),
//       });
//       const data = await response.json();
//       console.log(data);
//       return {
//         props: { data },
//       };
//     } catch (error) {
//       console.log(error);
//       return {
//         props: { data: null },
//       };
//     }
//   }
  