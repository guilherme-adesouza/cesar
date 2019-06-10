const RaceTypeDAO = require('../dao/raceTypeDAO');
const BasicController = require('./basicController');

class RaceTypeController extends BasicController {
  initialize(){
    super.initialize();
  }
}

module.exports = function(app){
  let controller = new RaceTypeController(app, 'race-type', new RaceTypeDAO());
  controller.initialize();
}
