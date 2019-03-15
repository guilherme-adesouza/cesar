const bcrypt = require('bcrypt');

function generateToken(user){
  return encrypt(user.name);
}

function encrypt(string) {
  return bcrypt.hashSync(string, 10);
}

function compareEncryptPassword(password, reqPassword) {
  return bcrypt.compareSync(reqPassword, password);
}

module.exports = {
  generateToken,
  encrypt,
  compareEncryptPassword
}
