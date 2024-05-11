import { getCookie } from "cookies-next";
import mysql from "serverless-mysql";

const db =mysql({
    config: {
      host: "localhost",
      database: "cod",
      user: "root",
      password: ""
    }
  });
export default function Home({id}) {

return(<h1>{id}</h1>)

}

export async function getServerSideProps(context) {
    const { req } = context;
   /* const id = await getCookie('id', context.query);
    const name = await getCookie('name', context.req);
    const qte = await getCookie('qte', context.req);
    const somme = await getCookie('somme', context.req);
    const adress = await getCookie('adress', context.req);
    const etat = await getCookie('etat', context.req);*/
    const {id}=context.query;
 
  
//  const result:any = await db.query('INSERT INTO orders VALUES (?,?,?,?,?,?)',["aaa111", "dfgg",44,65,"ggfg","false"]);
  return {
    props: {
      id:3,
    },
  };

}