const dao = require('./dao');
const BasicDAO = require('./basicDAO');

class AccountDAO extends BasicDAO {

  constructor(props) {
    super('account')
  }

}

module.exports = AccountDAO;
