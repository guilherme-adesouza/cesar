require('dotenv').config();

const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

const getUserById = (params) => {
  pool.query('SELECT * FROM player WHERE id = $1', [params.id], (error, results) => {
    if (error) {
      throw error
    }
    return results.rows[0];
  })
}

const getUserByName = (params, cb) => {
  pool.query('SELECT * FROM player WHERE name = $1', [params.name], (error, results) => {
    if (error) {
      throw error
    }
    cb(results.rows[0]);
  })
};

module.exports = {
  getUserById,
  getUserByName
}
