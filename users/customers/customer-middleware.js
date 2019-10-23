const jwt = require('jsonwebtoken');
const secrets = require('../../token/secrets');
// const db = require('../../data/db-config')


//Set the db to different tables by 'const's and give them if statements to secure them.

module.exports = (req, res, next) => {
  const token = req.headers.Authorization;

  // const customers = db('customers')
  // const service = db('serviceWorker')


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