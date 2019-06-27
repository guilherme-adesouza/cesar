const Security = require('../utils/security');
const UserDAO = require('../dao/userDAO');

const userDAO = new UserDAO();

function validateLogin(credentials, user, done){
  expect(user).toBeDefined();
  expect(Security.compareEncryptPassword({encryptPassword: user.password, password: credentials.password})).toBe(true);
  done();
}

test('successfully login email', done => {
  const credentials = {
    username: 'junior.lenhart@universo.univates.br',
    password: '123'
  };
  // userDAO.getByEmail(credentials.username, (user) => {
  //   validateLogin(credentials, user, done);
  // });
})

test('successfully login username', done => {
  const credentials = {
    username: 'junior-lenhart',
    password: '123'
  };
  // userDAO.getByName(credentials.username, (user) => {
  //   validateLogin(credentials, user, done);
  // })
})

test('unsuccessfully login username', done => {
  function validateLogin(credentials, user){
    expect(user).toBe(undefined);
    // expect(Security.compareEncryptPassword({encryptPassword: user.password, password: credentials.password})).toBe(false);
    done();
  }

  const credentials = {
    username: 'teste',
    password: '321'
  };
  // userDAO.getByName(credentials.username, (user) => {
  //   validateLogin(credentials, user);
  // })
})
