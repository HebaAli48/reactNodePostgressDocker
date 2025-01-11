const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors()); // Enable CORS

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.get('/information', async (req, res) => {
  const page = parseInt(req.query.page) || 0;
  const pageSize = 1; // Always fetch one item per page

  try {
    // Get the total number of records
    const countResult = await pool.query('SELECT COUNT(*) FROM information');
    const totalRecords = parseInt(countResult.rows[0].count, 10);

    // Calculate offset cyclically
    const offset = (page * pageSize) % totalRecords;

    console.log(`Fetching data for page: ${page}, offset: ${offset}`); // Log the page and offset

    // Fetch the data
    const result = await pool.query(
      'SELECT * FROM information LIMIT $1 OFFSET $2',
      [pageSize, offset]
    );

    console.log(result.rows); // Log the fetched data
    res.json(result.rows); // Return the fetched item
  } catch (err) {
    console.error(err); // Log the error
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
