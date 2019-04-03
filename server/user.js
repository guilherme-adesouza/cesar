const security = require('./security');
const UserDAO = require('./dao/userDAO');

module.exports = function(app){

  app.post('/api/login', (req, res) => {
    const credentials = req.body;

    UserDAO.getUserByName(credentials.username, (user) => {
      if(!!user && security.compareEncryptPassword(user.password, credentials.password)) {
        res.cookie(security.jwt_name, security.generateJWT(user), { httpOnly: true });
        res.send({message: 'login success'});
      } else {
        res.status(403).send({message: 'NOT OKAY MEN!'});
      }
    });
  });

  app.get('/api/logout', (req, res) => {
    res.clearCookie(security.jwt_name);
  });

  app.get('/api/verify-auth', (req, res) => {
    const token = req.cookies[security.jwt_name];
    const jwt = !!token && security.decodeJWT(token);
    if (jwt && Date.now() < jwt.expires) {
      if(req.query.checkMaster) {
        console.info('[AUTH] Master: ', jwt.user.master);
        res.send({auth: jwt.user.master});
      } else {
        console.info('[AUTH]: OK');
        res.send({auth: true});
      }
    } else {
      console.info('[AUTH]: FAILED');
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
