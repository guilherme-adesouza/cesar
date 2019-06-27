const GenreDAO = require('../dao/genreDAO');
const BasicController = require('./basicController');

class GenreController extends BasicController {
  initialize(){
    super.initialize();
  }
}

module.exports = function(app){
  let controller = new GenreController(app, 'genre', new GenreDAO());
  controller.initialize();
}
