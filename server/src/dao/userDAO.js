const dao = require('./dao');
const Security = require('../utils/security');
const BasicDAO = require('./basicDAO');

class UserDAO extends BasicDAO {

  constructor(props) {
    super('player')
  }

  insert(values, cb) {
    let {password, ...otherValues} = values;
    password = !!password ? password : '123';
    const player = {password: Security.encrypt(password), ...otherValues};
    return dao.insert({table: this.table, values: player}, cb);
  }

  getByUsername(username, cb) {
    const params = {username};
    return dao.selectOne({table: this.table, params}, cb);
  };

  getByEmail(email, cb) {
    const params = {email};
    return dao.selectOne({table: this.table, params}, cb);
  };

  getAll(cb) {
    return dao.selectMany({
      table: this.table,
      fields: 'id, username, nickname, email, achievements_control, public, master, active',
    }, cb);
  };

}

module.exports = UserDAO;
