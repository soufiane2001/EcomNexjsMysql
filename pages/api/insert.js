import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: "localhost",
    database: "commerce",
    user: "root",
    password: ""
  }
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const results = await db.query('INSERT INTO `products`( `name`, `price`, `inventory`) VALUES (?,?,?)',["maroc", 25, 25]);
        await db.end();
        res.status(201).json({ message: 'User added successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding user' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }