const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET || 'suaSenhaSecreta';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (payload) => jwt.sign(payload, TOKEN_SECRET, jwtConfig);

/* const decodeToken = (token) =>
  jwt.verify(token, TOKEN_SECRET); */

module.exports = {
  createToken,
/*   decodeToken, */
};