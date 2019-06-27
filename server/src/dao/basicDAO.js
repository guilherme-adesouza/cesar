const dao = require('./dao');

class BasicDAO {

  constructor(table) {
    this.table = table;
  }

  getById(id, cb) {
    const params = {id};
    return dao.selectOne({table: this.table, params}, cb);
  };

  insert(values, cb) {
    return dao.insert({table: this.table, values}, cb);
  }

  delete(id, cb) {
    const params = {id};
    return dao.delete({table: this.table, params}, cb);
  }

  update(id, values, cb) {
    const params = {id};
    return dao.update({table: this.table, values, params}, cb);
  }

  getAll(cb) {
    return dao.selectMany({table: this.table}, cb);
  }

}

module.exports = BasicDAO;
