// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mysql from 'serverless-mysql'

const db = mysql({
  config: {
    host: "localhost",
    database: "cod",
    user: "root",
    password: ""
  }
})

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Handle the POST request here
    const data = req.body; // Access the data sent from the client
    console.log('Received data:', data);
    // Perform necessary operations and send response
    const results = await db.query(
      `INSERT INTO orderdetails VALUES (?,?,?,?)`,
      [data.id,data.idpr,data.qte,data.qte]
    )

    res.status(200).json({ message: 'Data received successfully!' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
