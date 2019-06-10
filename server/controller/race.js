const RaceDAO = require('../dao/raceDAO');
const BasicController = require('./basicController');

class RaceController extends BasicController {
  initialize(){
    super.initialize();
  }
}

module.exports = function(app){
  let controller = new RaceController(app, 'race', new RaceDAO());
  controller.initialize();
}
