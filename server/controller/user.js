const Security = require('../utils/security');
const UserDAO = require('../dao/userDAO');

function validateLogin(credentials, user, res){
  if(!!user && Security.compareEncryptPassword({encryptPassword: user.password, password: credentials.password})) {
    res.cookie(Security.jwt_name, Security.generateJWT(user), { httpOnly: true });
    res.send({message: 'login success'});
  } else {
    res.status(403).send({message: 'NOT OKAY MEN!'});
  }
}

module.exports = function(app){

  const userDAO = new UserDAO();

  app.post('/api/login', (req, res) => {
    const credentials = req.body;

    if(credentials.username.includes('@')) {
      userDAO.getByEmail(credentials.username, (user) => {
        validateLogin(credentials, user, res);
      });
    } else {
      userDAO.getByName(credentials.username, (user) => {
        validateLogin(credentials, user, res);
      });
    }
  });

  app.get('/api/logout', (req, res) => {
    res.clearCookie(Security.jwt_name);
    res.sendStatus(200);
  });

  app.get('/api/verify-auth', (req, res) => {
    const jwt = Security.decodeRequestToken(req);
    if (jwt && Date.now() < jwt.expires) {
      if(req.query.checkMaster) {
        res.send({auth: jwt.user.master});
      } else {
        res.send({auth: true});
      }
    } else {
      res.clearCookie('cesar_session');
      res.send({auth: false});
    }
  });

  app.get('/api/generate-password', (req, res) => {
    if (req.query.token === process.env.API_TOKEN) {
      const encryptPass = Security.encrypt(req.query.password);
      res.send({password: encryptPass});
    }
  });
}
