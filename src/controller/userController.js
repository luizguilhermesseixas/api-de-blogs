const { userService } = require('../service');

const userLogin = async (req, res) => {
  const data = req.body;
  const { status, message } = await userService.userLogin(data);

  return res.status(status).json(message);
};

const userRegister = async (req, res) => {
  const data = req.body;
  const { status, message } = await userService.userRegister(data);
  return res.status(status).json(message);
};

module.exports = {
  userLogin,
  userRegister,
};