const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors()); // Lisää CORS-tuki

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'codakdb',
  password: 'vilikissa',
  port: 5432,
});

app.get('/data', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM student');
    res.json(rows);
  } catch (error) {
    console.error('Virhe haettaessa dataa:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Node.js-palvelin kuuntelee portilla ${port}`);
});
