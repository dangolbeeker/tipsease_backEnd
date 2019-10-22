const jwt = require('jsonwebtoken');
const secrets = require('../../token/secrets');

module.exports = (req, res, next) => {
  const token = req.headers.auth;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: 'You cannot pass.' });
      } else {
        req.user = {
            id: decodedToken.id,
            username: decodedToken.username,
            password: decodedToken.password,
        };
        next();
      }
    });
  } else {
    res.status(400).json({ message: 'No token provided' });
  }
};