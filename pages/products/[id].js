import { useRouter } from "next/router";
import { Image } from "antd";
import styles from './[id].module.css';



export default function ({ item }) {
  const { query } = useRouter();
  console.log(item);
  return (
    <div className={styles.product} itemScope itemType="http://schema.org/Product">
      <h1> Товар c id {query.id}</h1>
      <Image width={200} src="https://azbykamebeli.ru/upload/iblock/012/0122b0c562795bacf35b52e539f9114b.jpg?resize=w[1000]h[750]f[t]fc[ffffff]" />
      <p itemProp="name">Название - {item.offer_name}</p>
      <p itemProp="description">Описание: {item.display_properties[0].VALUE}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const url = `https://pim.impermebel.ru/offers/api/offer_detail`;
    let data = JSON.stringify({
      offer_id: params.id,
    });
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const item = await response.json();
    console.log(item);

    return {
      props: { item },
    };
  } catch (error) {
    console.error(error);
    console.log(params.id);
    return {
      props: { item: {} },
    };
  }
}
