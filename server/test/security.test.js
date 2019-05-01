const security = require('../utils/security');

test('success encrypt and compare', () => {
  const password = '123';
  const encryptPassword = security.encrypt(password);
  expect(security.compareEncryptPassword({encryptPassword, password})).toBe(true);
})

test('fail encrypt and compare', () => {
  const password = '123';
  const encryptPassword = security.encrypt(password);
  expect(security.compareEncryptPassword({encryptPassword, password: '321'})).toBe(false);
})

test('successfully login', () => {
  
})

test('unsuccessfully login', () => {

})
