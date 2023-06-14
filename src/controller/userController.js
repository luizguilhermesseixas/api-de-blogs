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

const getAllUsers = async (_req, res) => {
const { status, message } = await userService.getAllUsers();
return res.status(status).json(message);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await userService.getUserById(id);
  return res.status(status).json(message);
};

module.exports = {
  userLogin,
  userRegister,
  getAllUsers,
  getUserById,
};