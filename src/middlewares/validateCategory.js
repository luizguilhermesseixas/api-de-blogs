const validateCategory = (req, res, next) => {
  const data = req.body;
  if (!data.name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  return next();
};

module.exports = {
  validateCategory,
};