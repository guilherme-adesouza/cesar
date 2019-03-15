const security = require('./security');

module.exports = function(app, db){

  app.post('/api/login', (req, res) => {
    const credentials = req.body;

    db.getUserByName({name: credentials.username}, (user) => {
      if(!!user && security.compareEncryptPassword(user.password, credentials.password)) {
        res.cookie('cesar_session', security.generateToken(user), { maxAge: 1000 * 12});
        res.send({message: 'login success'});
      } else {
        res.status(403).send({message: 'NOT OKAY MEN!'});
      }
    });
  });

}
