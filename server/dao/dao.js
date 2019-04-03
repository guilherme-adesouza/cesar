const db = require('./database');

function getParams(params){
  let query = 'WHERE 1 = 1';
  const columns = Object.getOwnPropertyNames(params);
  columns.forEach((column, index) => {
    query += ' AND ';
    query += `${column} = $${index + 1}`;
  })
  return query;
}

class DAO {

  static selectOne({table = '', fields = '*', params = {}, additionalQuery = ''}, cb){
    const query = {
      text: `SELECT ${fields} FROM ${table} ${getParams(params)} ${additionalQuery}`,
      values: Object.values(params)
    }
    db.executeQuery(query, (result) => cb(result[0]));
  }
}

module.exports = DAO;
