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

  getPlayerInfo(player, cb){
    const player_id = player.id;
    return dao.custom({sql:
      'SELECT DISTINCT ' +
        'platform.id AS platform_id, ' +
        'platform.platform, ' +
        'platform.img, ' +
        'account.id AS account_id, ' +
        'account.level, ' +
        'account.nickname ' +
      `FROM ${this.table} ` +
      'JOIN platform ' +
        'ON platform.id = account.platform_id ' +
      'WHERE player_id=$1;',
      values: [player_id]
      }, (list) => {
        let returnList = {};
        list.forEach(info => {
          let platform = {name: info.platform, logo: info.img};
          let account = {id: info.account_id, level: info.level, nickname: info.nickname};
          if(!returnList[info.platform_id]){
            returnList[info.platform_id] = {platform: platform, accounts: []};
          }
          returnList[info.platform_id].accounts.push(account);
        });
        cb(returnList);
    });
  }
}

module.exports = AccountDAO;
