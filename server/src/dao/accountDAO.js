const dao = require('./dao');
const BasicDAO = require('./basicDAO');

class AccountDAO extends BasicDAO {

  constructor(props) {
    super('account')
  }

  getByPlayer(player, cb) {
    const player_id = player.id;
    return dao.selectMany({table: this.table, params: {player_id}}, cb);
  }

}

module.exports = AccountDAO;
