const { postService } = require('../service');

const postRegister = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const obj = { title, content, categoryIds, userId: id };
  const { status, message } = await postService.postRegister(obj);
  return res.status(status).json(message);
};

module.exports = {
  postRegister,
};