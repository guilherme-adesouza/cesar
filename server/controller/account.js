const security = require('../utils/security');
const AccountDAO = require('../dao/accountDAO');
const BasicController = require('./basicController');

class AccountController extends BasicController {

  getByPlayer(){
    this.app.get(`/api/${this.url}-player/`, (req, res) => {
      console.log('gonna getByPlayer');
      const jwt = security.decodeRequestToken(req);
      const player = !!jwt ? jwt.user : req.params.user;
      if(!player){
        res.status(404).send({message: `Need to inform the player owner of accounts`})
      }
      try {
        this.dao.getByPlayer(player, (list) => {
          res.status(200).send(list);
        })
      } catch(error){
        throw new Error(error);
      }
    });
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
