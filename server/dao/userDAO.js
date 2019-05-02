const dao = require('./dao');
const security = require('../utils/security');
const BasicDAO = require('./basicDAO');

class UserDAO extends BasicDAO {

  constructor(props) {
    super('player')
  }

  insert(values, cb) {
    const {password, ...otherValues} = values;
    const player = {password: security.encrypt(password), ..otherValues};
    return dao.insert({table: this.table, values}, cb);
  }

  getByName(name, cb) {
    const params = {name};
    return dao.selectOne({table: this.table, params}, cb);
  };

  getByEmail(email, cb) {
    const params = {email};
    return dao.selectOne({table: this.table, params}, cb);
  };

}

module.exports = UserDAO;
