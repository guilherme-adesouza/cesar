const dao = require('./dao');
const BasicDAO = require('./basicDAO');

class GameDAO extends BasicDAO {

  constructor(props) {
    super('game')
  }

}

module.exports = GameDAO;
