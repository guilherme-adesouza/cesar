require('dotenv').config();

const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

const executeQuery = (query, cb) => {
  console.info('[QUERY]: ', JSON.stringify(query));
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    cb(results.rows);
  })
}

module.exports = {
  executeQuery
}
