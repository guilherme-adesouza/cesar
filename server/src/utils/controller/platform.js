const PlatformDAO = require('../dao/platformDAO');
const BasicController = require('./basicController');

class PlatformController extends BasicController {
  initialize(){
    super.initialize();
  }
}

module.exports = function(app){
  let controller = new PlatformController(app, 'platform', new PlatformDAO());
  controller.initialize();
}
