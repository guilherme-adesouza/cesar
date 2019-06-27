const GameDAO = require('../dao/gameDAO');
const BasicController = require('./basicController');

class GameController extends BasicController {

  initialize(){
    super.initialize();
  }

}

module.exports = function(app){
  let controller = new GameController(app, 'game', new GameDAO());
  controller.initialize();
}
