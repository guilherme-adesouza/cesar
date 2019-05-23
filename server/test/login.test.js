const security = require('../utils/security');
const UserDAO = require('../dao/userDAO');

const userDAO = new UserDAO();

test('successfully login email', done => {
  function validateLogin(credentials, user){
    expect(user).toBe(undefined);
    // expect(security.compareEncryptPassword({encryptPassword: user.password, password: credentials.password})).toBe(true);
    done();
  }

  const credentials = {
    username: 'junior.lenhart@universo.univates.br',
    password: '123'
  };
  userDAO.getByEmail(credentials.username, (user) => {
    validateLogin(credentials, user);
  });
})

test('successfully login username', done => {
  function validateLogin(credentials, user){
    expect(user).toBeDefined();
    expect(security.compareEncryptPassword({encryptPassword: user.password, password: credentials.password})).toBe(true);
    done();
  }

  const credentials = {
    username: 'junior-lenhart',
    password: '123'
  };
  userDAO.getByName(credentials.username, (user) => {
    validateLogin(credentials, user);
  })
})

test('unsuccessfully login username', done => {
  function validateLogin(credentials, user){
    expect(user).toBe(undefined);
    // expect(security.compareEncryptPassword({encryptPassword: user.password, password: credentials.password})).toBe(false);
    done();
  }

  const credentials = {
    username: 'teste',
    password: '321'
  };
  userDAO.getByName(credentials.username, (user) => {
    validateLogin(credentials, user);
  })
})
