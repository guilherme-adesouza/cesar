const dao = require('./dao');
const BasicDAO = require('./basicDAO');

class GameDAO extends BasicDAO {

  constructor(props) {
    super('game')
  }

  getAll(cb) {
    return dao.selectMany({table: this.table, additionalQuery: "ORDER BY name"}, cb);
  }

}

module.exports = GameDAO;
