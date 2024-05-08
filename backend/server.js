const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());

// PostgreSQL connection configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Object',
  password: 'Narmin',
  port: 5432, // Default PostgreSQL port
});

app.get('/', (req, res) => {
  return res.json("From backend side");
});

app.get('/products', async (req, res) => {
  try {
    // Query to select all products from the database
    const query = "SELECT * FROM products";
    // Executing the query using the connection pool
    const { rows } = await pool.query(query);
    return res.json(rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
