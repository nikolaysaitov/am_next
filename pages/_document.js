// pages/\_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
        <meta keywords="Метатэги от Next js" content="website" />
        <meta property="og:title" content="SUNNY PLUS 1600х2000 " />
        <meta property="og:description" content="матрас" />
        <meta property="og:image" content="https://azbykamebeli.ru/upload/iblock/8d8/8d815816276103cd080907a20e61529f.jpg" />
        <meta property="og:url" content="https://azbykamebeli.ru/catalog/dvuspalnye/1022598/?offerId=1023591" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
