const { BlogPost, Category, PostCategory } = require('../models');

const findCategories = async (categories) => {
  const getCategories = await Promise.all(categories
  .map((eachCategory) => Category.findByPk(eachCategory)));
  console.log(getCategories);
  const check = getCategories.some((category) => category === null);
  return check; 
};

const postCategoriesRegister = async (categoriesIds, postId) => {
  await Promise.all(categoriesIds
    .map((eachCategory) => PostCategory.create({ categoryId: eachCategory, postId })));
};

const postRegister = async (data) => {
  const checkCategories = await findCategories(data.categoryIds);
  if (checkCategories) {
    return { status: 400, message: { message: 'one or more "categoryIds" not found' } };
  }
  const newPost = await BlogPost.create(data);
  await postCategoriesRegister(data.categoryIds, newPost.id);
  return { status: 201, message: newPost };
};

module.exports = {
  postRegister,
};