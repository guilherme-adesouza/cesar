const Config = require('../utils/config');

const Pool = require('pg').Pool;
const pool = new Pool({
  user: Config.DB_USER,
  host: Config.HOST,
  database: Config.DB_NAME,
  password: Config.DB_PASSWORD,
  port: Config.DB_PORT,
});

const executeQuery = (query, cb) => {
  console.info('[QUERY]: ', JSON.stringify(query));
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    cb(results.rows);
  })
};

module.exports = {
  executeQuery
};
