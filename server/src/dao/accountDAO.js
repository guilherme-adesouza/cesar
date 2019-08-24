const dao = require('./dao');
const BasicDAO = require('./basicDAO');

class AccountDAO extends BasicDAO {

  constructor(props) {
    super('account')
    this.fields = `${this.table}.id, ${this.table}.account, player.username, platform.platform, ${this.table}.nickname, ${this.table}.level, ${this.table}.points, ${this.table}.link`;
    this.join = `LEFT JOIN player ON player.id = ${this.table}.player_id ` +
           `LEFT JOIN platform ON platform.id = ${this.table}.platform_id `;
  }

  getAll(cb) {
    return dao.selectMany(
      {
        fields: this.fields,
        join: this.join,
        table: this.table,
      },
      cb
    );
  }

  getByPlayer(player, cb) {
    const player_id = player.id;
    return dao.selectMany(
      {
        fields: this.fields,
        join: this.join,
        table: this.table,
        params: {player_id},
      },
      cb
    );
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
          if(!returnList[info.account_id]){
            returnList[info.account_id] = {platform: platform, accounts: []};
          }
          returnList[info.account_id].accounts.push(account);
        });
        cb(returnList);
    });
  }
}

module.exports = AccountDAO;
