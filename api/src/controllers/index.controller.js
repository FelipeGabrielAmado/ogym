const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
});

const getWorkouts = async (req, res) => {
    const response = await pool.query('SELECT * FROM workout ORDER BY id ASC');
    res.status(200).json(response.rows);
};


module.exports = {
    getWorkouts
};