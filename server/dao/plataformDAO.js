const dao = require('./dao');
const BasicDAO = require('./basicDAO');

class PlataformDAO extends BasicDAO {

  constructor(props) {
    super('plataform')
  }

}

module.exports = PlataformDAO;
