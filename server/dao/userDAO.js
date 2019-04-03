const dao = require('./dao');

const table = 'player';

class UserDAO  {

  static getUserById(id, cb) {
    const params = {id};
    return dao.selectOne({table, params}, cb);
  };

  static getUserByName(name, cb) {
    const params = {name};
    return dao.selectOne({table, params}, cb);
  };
}

module.exports = UserDAO;
