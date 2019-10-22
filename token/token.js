const jwt = require('jsonwebtoken');
const secrets = require('./secrets');

module.exports = {
    customerToken,
    serviceToken
}


function customerToken(user){
  const payload = {
    username: user.username,
    subject: user.id,
    password: user.password,
  };
  const options = {
    expiresIn: '1h',
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}


function serviceToken(user){
  const payload = {
    username: user.username,
    subject: user.id,
    password: user.password,
  };
  const options = {
    expiresIn: '1h',
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}