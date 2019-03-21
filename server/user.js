const security = require('./security');

module.exports = function(app, db){

  app.post('/api/login', (req, res) => {
    const credentials = req.body;

    db.getUserByName({name: credentials.username}, (user) => {
      if(!!user && security.compareEncryptPassword(user.password, credentials.password)) {
        res.cookie('cesar_session', security.generateJWT(credentials.username), { httpOnly: true });
        res.send({message: 'login success'});
      } else {
        res.status(403).send({message: 'NOT OKAY MEN!'});
      }
    });
  });

  app.get('/api/logout', (req, res) => {
    res.clearCookie('cesar_session');
  });

  app.get('/api/verify-auth', (req, res) => {
    const token = req.cookies.cesar_session;
    const jwt = !!token && security.decodeJWT(token);
    if (jwt && Date.now() < jwt.expires) {
      res.send({auth: true});
    } else {
      res.clearCookie('cesar_session');
      res.send({auth: false});
    }
  });

  app.get('/api/generate-password', (req, res) => {
    if (req.query.token === process.env.API_TOKEN) {
      const encryptPass = security.encrypt(req.query.password);
      res.send({password: encryptPass});
    }
  });
}
