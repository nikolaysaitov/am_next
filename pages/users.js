import { useEffect, useState } from "react";
import Link from "next/link";

function Users({ data }) {


  return (
    <div>
      <h1>Список товаров</h1>
      <ul>
      {data.offers.map(item =>
                    <li key={item.item_id}>
                        <Link href={`/users/${item.offer_id}`}>
                            <p>{item.offer_name}</p>
                        </Link>
                    </li>
                )}
      </ul>
    </div>
  );
}
export default Users;

// export async function getStaticProps() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const users =  await response.json()

//     return { 
//         props: {users} }
//   }
   
  
export async function getStaticProps() {
    const url = "https://pim.impermebel.ru/offers/api/offers";
  
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ page: 1, limit: 10, query: "" }),
      });
      const data = await response.json();
      console.log(data);
      return {
        props: { data },
      };
    
  }
  