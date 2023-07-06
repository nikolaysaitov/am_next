
import Link from "next/link";
import { Typography } from 'antd';
const { Title, Text } = Typography;

function Users({ data }) {

  return (
    <div>
      <Title level={2}>Список товаров</Title>
     
        <ul itemScope itemType="http://schema.org/Product">
          {data.offers.map((item) => (
            <li itemScope itemType="http://schema.org/Offer" key={item.item_id}>
              <Link href={`/users/${item.offer_id}`}>
                <Text  itemProp="name">{item.offer_name}</Text>
              </Link>
            </li>
          ))}
        </ul>
     
    </div>
  );
}
export default Users;

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
  
