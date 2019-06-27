const Security = require('../utils/security');

function validateUser(req, res){
  const jwt = Security.decodeRequestToken(req);
  const player = !!jwt ? jwt.user : req.params.user;
  if(!player){
    res.status(404).send({message: `Need to inform the player`})
  }
  return player;
}

module.exports = {
  validateUser
}
