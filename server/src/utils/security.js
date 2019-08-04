const Config = require('./config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = 'esquizofrenia_acrombatica';
const jwt_name = 'cesar_session';

function decodeRequestToken(req){
  const token = req.cookies[jwt_name];
  const jwt = !!token && decodeJWT(token);
  return jwt;
}

function generateJWT(user, creationTime = null){
  const expires = Date.now() + (parseInt(Config.JWT_EXPIRATION_MINUTES) * 1000 * 60);
  if(!creationTime) {
    creationTime = expires;
  }
  return jwt.sign(JSON.stringify({user, expires, creationTime}), secretKey);
}

function decodeJWT(token){
  return jwt.verify(token, secretKey);
}

function encrypt(string) {
  return bcrypt.hashSync(string, 10);
}

function compareEncryptPassword({encryptPassword, password}) {
  return bcrypt.compareSync(password, encryptPassword);
}

module.exports = {
  secretKey,
  jwt_name,
  generateJWT,
  decodeJWT,
  encrypt,
  compareEncryptPassword,
  decodeRequestToken
};
