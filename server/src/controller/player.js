const UserDAO = require('../dao/userDAO');
const BasicController = require('./basicController');

class PlayerController extends BasicController {
  initialize(){
    super.initialize();
  }
}

module.exports = function(app){
  let controller = new PlayerController(app, 'user', new UserDAO());
  controller.initialize();
};
