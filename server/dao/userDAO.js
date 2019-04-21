const dao = require('./dao');
const BasicDAO = require('./basicDAO');

class UserDAO extends BasicDAO {

  constructor(props) {
    super('player')
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
