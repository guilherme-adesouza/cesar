const RaceDAO = require('../dao/raceDAO');
const BasicController = require('./basicController');

class RaceController extends BasicController {
  initialize(){
    super.initialize();
  }

  beforeSaveOrUpdate({req, res, ...props}){
    const {game_id, account_id, ...bodyProps} = req.body;
    let body = {...bodyProps};
    body.account_has_game_id = game_id;
    return body;
  }
}

module.exports = function(app){
  let controller = new RaceController(app, 'race', new RaceDAO());
  controller.initialize();
};
