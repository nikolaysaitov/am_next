import { useRouter } from "next/router";

export default function ({item}) {
  const { query } = useRouter();

  return (
    <div>
      <h1> Товар c id {query.id}</h1>
      <p>Название - {item.offer_name}</p>
      <p>Описание: {item.display_properties[0].VALUE}</p>
    </div>
  );
}

export async function getServerSideProps({params}) {
    try {
      const url = `https://pim.impermebel.ru/offers/api/offer_detail`;
      let data = JSON.stringify({
        offer_id: params.id
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
        props: {item: {}},
      };
    }
  }