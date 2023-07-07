import Link from "next/link";
import { Typography, Card } from "antd";
import styles from "./products.module.css";
import { ShoppingCartOutlined, HeartOutlined, QuestionCircleOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
const { Meta } = Card;
function Products({ data }) {
  return (
    <div>
      <Title level={2}>Список товаров</Title>

      <ul className={styles.products} itemScope itemType="http://schema.org/Product">
        {data.offers.map((item, index) => (
          
            <Card
              className={styles.product}
              itemScope
              itemType="http://schema.org/Offer"
              key={index}
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://azbykamebeli.ru/upload/iblock/012/0122b0c562795bacf35b52e539f9114b.jpg?resize=w[1000]h[750]f[t]fc[ffffff]"
                />
              }
              actions={[
                <QuestionCircleOutlined key="setting" />,
                <ShoppingCartOutlined  key="edit" />,
                <HeartOutlined key="ellipsis"/>,
              ]}
            >
              <Link itemProp="url" title={item.offer_name} href={`/products/${item.offer_id}`}>
                <Text itemProp="name">{item.offer_name}</Text>
                <Meta title={item.color} description={item.offer_id} />
              </Link>
            </Card>
          
        ))}
      </ul>
    </div>
  );
}
export default Products;

export async function getStaticProps() {
  try {
    //   setLoading(true);
    const url = "https://pim.impermebel.ru/offers/api/offers";

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page: 1, limit: 20, query: "" }),
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }
    //   setLoading(false);
    const data = await response.json();
    console.log(data);

    return {
      props: { data },
      revalidate: 30, // в секундах
    };
  } catch (error) {
    // Обработка ошибок
    console.error(error);

    // Возвращаем пустые данные или другие значения по умолчанию в случае ошибки
    return {
      props: { data: [] }, // или любые другие значения по умолчанию
    };
  }
}
