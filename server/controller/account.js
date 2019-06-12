const Validations = require('./validations');
const AccountDAO = require('../dao/accountDAO');
const BasicController = require('./basicController');

class AccountController extends BasicController {

  getByPlayer(){
    this.app.get(`/api/${this.url}-player/`, (req, res) => {
      const player = Validations.validateUser(req, res);
      try {
        this.dao.getByPlayer(player, (list) => {
          res.status(200).send(list);
        })
      } catch(error){
        throw new Error(error);
      }
    });
  }

  beforeSaveOrUpdate({req, res, ...props}){
    const player = Validations.validateUser(req, res);
    let account = req.body;
    account.player_id = player.id;
    return account;
  }

  initialize(){
    super.initialize();
    this.getByPlayer();
  }
}

module.exports = function(app){
  let controller = new AccountController(app, 'account', new AccountDAO());
  controller.initialize();
}
