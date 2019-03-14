const bcrypt = require('bcrypt');

function encryptPassword(password) {
  return bcrypt.hashSync(password, 10);
}

function compareEncryptPassword(password, reqPassword) {
  return bcrypt.compareSync(reqPassword, password);
}

module.exports = {
  encryptPassword,
  compareEncryptPassword
}
