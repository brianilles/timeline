const jwt = require('jsonwebtoken');
const secrets = require('../api/secret.js');

module.exports = {
  authenticate
};

function authenticate(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, secrets.jwtSecret, (error, decodedToken) => {
      if (error) {
        res.status(401).json({ message: 'Invalid credentials' });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'No token provided.' });
  }
}
