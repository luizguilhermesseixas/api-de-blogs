const { categoryService } = require('../service');

const registerCategory = async (req, res) => {
  const data = req.body;
  const { status, message } = await categoryService.registerCategory(data);
  return res.status(status).json(message);
};

module.exports = {
  registerCategory,
};