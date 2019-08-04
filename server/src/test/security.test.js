const Security = require('../utils/security');

test('success encrypt and compare', () => {
  const password = '123';
  const encryptPassword = Security.encrypt(password);
  expect(Security.compareEncryptPassword({encryptPassword, password})).toBe(true);
});

test('fail encrypt and compare', () => {
  const password = '123';
  const encryptPassword = Security.encrypt(password);
  expect(Security.compareEncryptPassword({encryptPassword, password: '321'})).toBe(false);
});
