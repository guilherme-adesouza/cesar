const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = 'esquizofrenia_acrombatica';
const jwt_name = 'cesar_session';

function generateJWT(username){
  const expires = Date.now() + parseInt(process.env.JWT_EXPIRATION_MS);
  return jwt.sign(JSON.stringify({username, expires}), secretKey);
}

function decodeJWT(token){
  return jwt.verify(token, secretKey)
}

function encrypt(string) {
  return bcrypt.hashSync(string, 10);
}

function compareEncryptPassword(password, reqPassword) {
  return bcrypt.compareSync(reqPassword, password);
}

module.exports = {
  secretKey,
  jwt_name,
  generateJWT,
  decodeJWT,
  encrypt,
  compareEncryptPassword
}
