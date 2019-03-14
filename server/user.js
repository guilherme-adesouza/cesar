const utils = require('./utils');

module.exports = function(app, db){

  app.post('/api/login', (req, res) => {
    const credentials = req.body;

    db.getUserByName({name: credentials.username}, (user) => {
      if(utils.compareEncryptPassword(user.password, credentials.password)) {
        res.send('login success');
      } else {
        res.status(403).send({message: 'NOT OKAY MEN!'});
      }
    });
  });

}
