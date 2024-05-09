// Login.test.js
const Login = require('../pages/Login');

describe('Login', () => {
  it('should return true if the username and password are correct', () => {
    expect(Login('correctUsername', 'correctPassword')).toBe(true);
  });

  it('should return false if the username is incorrect', () => {
    expect(Login('incorrectUsername', 'correctPassword')).toBe(false);
  });

  it('should return false if the password is incorrect', () => {
    expect(Login('correctUsername', 'incorrectPassword')).toBe(false);
  });

  it('should return false if both the username and password are incorrect', () => {
    expect(Login('incorrectUsername', 'incorrectPassword')).toBe(false);
  });
});