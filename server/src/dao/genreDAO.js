const dao = require('./dao');
const BasicDAO = require('./basicDAO');

class GenreDAO extends BasicDAO {

  constructor(props) {
    super('genre')
  }

}

module.exports = GenreDAO;
