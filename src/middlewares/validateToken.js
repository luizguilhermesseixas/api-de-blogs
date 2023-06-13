/* const { decodeToken } = require('../utils/JWT'); */

const validateJWT = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  console.log(req);

  return next();
};

module.exports = {
  validateJWT,
};