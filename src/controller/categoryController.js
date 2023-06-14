const { categoryService } = require('../service');

const registerCategory = async (req, res) => {
  const data = req.body;
  const { status, message } = await categoryService.registerCategory(data);
  return res.status(status).json(message);
};

const getAllCategories = async (_req, res) => {
  const { status, message } = await categoryService.getAllCategories();
  return res.status(status).json(message);
};

module.exports = {
  registerCategory,
  getAllCategories,
};