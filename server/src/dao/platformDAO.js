const dao = require('./dao');
const BasicDAO = require('./basicDAO');

class PlatformDAO extends BasicDAO {

  constructor(props) {
    super('platform')
  }

}

module.exports = PlatformDAO;
