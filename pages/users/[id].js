import { useRouter } from "next/router";

export default function ({user}) {
  const { query } = useRouter();

  return (
    <div>
      <h1> Пользователь c id {query.id}</h1>
      <p>Имя пользователя - {user.name}</p>
    </div>
  );
}

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();
  return {
    props: {user},
  };
}
