const PlataformDAO = require('../dao/plataformDAO');

module.exports = function(app){

  const plataformDAO = new PlataformDAO();

  app.get('/api/plataform', (req, res) => {
    try {
      plataformDAO.getAll((plataforms) => {
        console.log('get all plataforms: ', plataforms);
        res.status(200).send({plataforms});
      })
    } catch(error){
      throw new Error(error);
    }
  });

  app.get('/api/plataform/:id', (req, res) => {
    const id = req.params.id;
    try {
      plataformDAO.getById(id, (plataform) => {
        console.log(`plataform with id ${id}: `, plataform);
        if(!!plataform){
          res.status(200).send({plataform});
        } else {
          res.status(404).send({message: `Plataform with id ${id} not found`})
        }
      })
    } catch(error){
      throw new Error(error);
    }
  });

  app.post('/api/plataform', (req, res) => {
    const plataform = req.body;
    try {
      plataformDAO.insert(plataform, (response) => {
        console.log('post plataform: ', response);
        res.status(200).send({response});
      })
    } catch(error){
      throw new Error(error);
    }
  });

  app.put('/api/plataform/:id', (req, res) => {
    const id = req.params.id;
    const plataform = req.body;
    try {
      plataformDAO.update(id, plataform, (plataform) => {
        console.log('update plataform: ', plataform);
        res.sendStatus(204);
      })
    } catch(error){
      throw new Error(error);
    }
  });

  app.delete('/api/plataform/:id', (req, res) => {
    try {
      plataformDAO.delete(req.params.id, (cbRes) => {
        console.log('delete plataform: ', cbRes);
        res.sendStatus(200);
      })
    } catch(error){
      throw new Error(error);
    }
  });
}
