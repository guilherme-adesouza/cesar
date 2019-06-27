const dao = require('./dao');
const BasicDAO = require('./basicDAO');

class RaceDAO extends BasicDAO {

  constructor(props) {
    super('race')
  }

}

module.exports = RaceDAO;
