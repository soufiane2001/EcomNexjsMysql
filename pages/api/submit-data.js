import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = await req.json();

      // Access and process data from the form submission
      console.log('Received data:', data);

      // (Optional) Perform server-side actions like database interactions
      // ...

      res.status(200).json({ message: 'Data received successfully!' });
    } catch (error) {
      console.error('Error processing data:', error);
      res.status(500).json({ message: 'Failed to process data' });
    }
  } else {
    // Handle other HTTP methods (optional)
    res.status(405).end();
  }
}
