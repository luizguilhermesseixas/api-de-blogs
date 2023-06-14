const { Category } = require('../models');

const registerCategory = async (data) => {
  const newCategory = await Category.create(data);
  return { status: 201, message: newCategory };
};

const getAllCategories = async () => {
  const allCategories = await Category.findAll();
  return { status: 200, message: allCategories };
};

module.exports = {
  registerCategory,
  getAllCategories,
};