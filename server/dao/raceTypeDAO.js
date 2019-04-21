const dao = require('./dao');
const BasicDAO = require('./basicDAO');

class RaceTypeDAO extends BasicDAO {

  constructor(props) {
    super('race_type')
  }

}

module.exports = RaceTypeDAO;
