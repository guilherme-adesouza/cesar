class BasicController {
  constructor(app, url, dao){
    this.app = app;
    this.url = url;
    this.dao = dao;
  }

  getAll(){
    this.app.get(`/api/${this.url}`, (req, res) => {
      try {
        this.dao.getAll((list) => {
          res.status(200).send(list);
        })
      } catch(error) {
        throw new Error(error);
      }
    });
  }

  getById(){
    this.app.get(`/api/${this.url}/:id`, (req, res) => {
      const id = req.params.id;
      try {
        this.dao.getById(id, (object) => {
          if(!!object){
            res.status(200).send(object);
          } else {
            res.status(404).send({message: `${this.url} with id ${id} not found`})
          }
        })
      } catch(error){
        throw new Error(error);
      }
    });
  }

  insert(){
    this.app.post(`/api/${this.url}`, (req, res) => {
      const object = req.body;
      try {
        this.dao.insert(object, (response) => {
          res.status(201).send({response});
        })
      } catch(error){
        throw new Error(error);
      }
    });
  }

  update(){
    this.app.put(`/api/${this.url}/:id`, (req, res) => {
      const id = req.params.id;
      const object = req.body;
      try {
        this.dao.update(id, object, (object) => {
          res.sendStatus(204);
        })
      } catch(error){
        throw new Error(error);
      }
    });
  }

  deleteFn(){
    this.app.delete(`/api/${this.url}/:id`, (req, res) => {
      const id = req.params.id;
      try {
        this.dao.delete(id, (cbRes) => {
          res.sendStatus(200);
        })
      } catch(error){
        throw new Error(error);
      }
    });
  }

  initializeCRUD(){
    this.getAll();
    this.getById();
    this.insert();
    this.update();
    this.deleteFn();
  }

  initialize(){
    this.initializeCRUD();
  }
}

module.exports = BasicController;
