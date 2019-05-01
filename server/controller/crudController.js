const AccountDAO = require('../dao/accountDAO');
const GameDAO = require('../dao/gameDAO');
const GenreDAO = require('../dao/genreDAO');
const PlatformDAO = require('../dao/platformDAO');
const UserDAO = require('../dao/userDAO');
const RaceDAO = require('../dao/raceDAO');
const RaceTypeDAO = require('../dao/raceTypeDAO');

const cruds = [
  {object: 'account', dao: new AccountDAO()},
  {object: 'game', dao: new GameDAO()},
  {object: 'genre', dao: new GenreDAO()},
  {object: 'platform', dao: new PlatformDAO()},
  {object: 'user', dao: new UserDAO()},
  {object: 'race', dao: new RaceDAO()},
  {object: 'race-type', dao: new RaceTypeDAO()}
]


module.exports = function(app){
  cruds.forEach(crud => {
    app.get(`/api/${crud.object}`, (req, res) => {
      try {
        crud.dao.getAll((list) => {
          res.status(200).send(list);
        })
      } catch(error) {
        throw new Error(error);
      }
    });

    app.get(`/api/${crud.object}/:id`, (req, res) => {
      const id = req.params.id;
      try {
        crud.dao.getById(id, (object) => {
          if(!!object){
            res.status(200).send(object);
          } else {
            res.status(404).send({message: `${crud.object} with id ${id} not found`})
          }
        })
      } catch(error){
        throw new Error(error);
      }
    });

    app.post(`/api/${crud.object}`, (req, res) => {
      const object = req.body;
      try {
        crud.dao.insert(object, (response) => {
          res.status(200).send({response});
        })
      } catch(error){
        throw new Error(error);
      }
    });

    app.put(`/api/${crud.object}/:id`, (req, res) => {
      const id = req.params.id;
      const object = req.body;
      try {
        crud.dao.update(id, object, (object) => {
          res.sendStatus(204);
        })
      } catch(error){
        throw new Error(error);
      }
    });

    app.delete(`/api/${crud.object}/:id`, (req, res) => {
      const id = req.params.id;
      try {
        crud.dao.delete(id, (cbRes) => {
          res.sendStatus(200);
        })
      } catch(error){
        throw new Error(error);
      }
    });
  })
}
