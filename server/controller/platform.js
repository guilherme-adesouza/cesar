const PlatformDAO = require('../dao/platformDAO');

module.exports = function(app){

  const platformDAO = new PlatformDAO();

  app.get('/api/platform', (req, res) => {
    try {
      platformDAO.getAll((platforms) => {
        res.status(200).send({platforms});
      })
    } catch(error){
      throw new Error(error);
    }
  });

  app.get('/api/platform/:id', (req, res) => {
    const id = req.params.id;
    try {
      platformDAO.getById(id, (platform) => {
        if(!!platform){
          res.status(200).send({platform});
        } else {
          res.status(404).send({message: `platform with id ${id} not found`})
        }
      })
    } catch(error){
      throw new Error(error);
    }
  });

  app.post('/api/platform', (req, res) => {
    const platform = req.body;
    try {
      platformDAO.insert(platform, (response) => {
        res.status(200).send({response});
      })
    } catch(error){
      throw new Error(error);
    }
  });

  app.put('/api/platform/:id', (req, res) => {
    const id = req.params.id;
    const platform = req.body;
    try {
      platformDAO.update(id, platform, (platform) => {
        res.sendStatus(204);
      })
    } catch(error){
      throw new Error(error);
    }
  });

  app.delete('/api/platform/:id', (req, res) => {
    try {
      platformDAO.delete(req.params.id, (cbRes) => {
        res.sendStatus(200);
      })
    } catch(error){
      throw new Error(error);
    }
  });
}
