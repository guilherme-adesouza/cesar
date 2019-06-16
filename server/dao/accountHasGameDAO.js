const dao = require('./dao');
const BasicDAO = require('./basicDAO');

class AccountHasGameDAO extends BasicDAO {

  constructor(props) {
    super('account_has_game')
  }

  getByAccount(accountId, cb) {
    return dao.selectMany({table: this.table, params: {account_id: accountId}}, cb);
  }

  getByGame(gameId, cb) {
    return dao.selectMany({table: this.table, params: {game_id: gameId}}, cb);
  }

  getByAccountAndGame({accountId, gameId}, cb){
    return dao.selectOne({ table: this.table,
                            params: {
                              account_id: accountId,
                              game_id: gameId
                            }}, cb);
  }
}

module.exports = AccountHasGameDAO;
