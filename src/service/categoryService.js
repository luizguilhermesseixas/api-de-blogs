const { Category } = require('../models');

const registerCategory = async (data) => {
  const newCategory = await Category.create(data);
  return { status: 201, message: newCategory };
};

module.exports = {
  registerCategory,
};