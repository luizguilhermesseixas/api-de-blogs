const { decodeToken } = require('../utils/JWT');

const validateJWT = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const decoded = decodeToken(token);

  req.user = decoded;

  if (decoded.status) {
    return res.status(decoded.status).json({ message: decoded.message });
  }

  return next();
};

module.exports = {
  validateJWT,
};