//'use server'

import serverlessMysql from "serverless-mysql";

const db = serverlessMysql({
    config: {
      host: "localhost",
      database: "cod",
      user: "root",
      password: ""
    }
  });
const mysqlaction=async(prev,FormData)=>{
const name=FormData.get("name");
const email=FormData.get("email");
const tel=FormData.get("tel");
const adress=FormData.get("adress");



const result = await db.query('INSERT INTO orders VALUES (?,?,?,?,?,?)',["aa11", "dfgg",44,65,"ggfg","false"]);


}

export default mysqlaction;