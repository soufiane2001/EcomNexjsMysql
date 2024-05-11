import mysql from 'serverless-mysql'

const db = mysql({
  config: {
    host: "localhost",
    database: "cod",
    user: "root",
    password: ""
  }
})

export default async (req, res) => {
  const { body } = req



  try {
    const results = await db.query(
      `INSERT INTO orders VALUES (?,?,?,?,?,?)`,
      [body.name, body.id, body.qte, body.somme, body.adress]
    )

    res.status(201).end(JSON.stringify({
      id: 43
    }))
  } catch (error) {
    res.status(500).end(JSON.stringify({
      error: error.message
    }))
  } finally {
    db.end()
  }
}