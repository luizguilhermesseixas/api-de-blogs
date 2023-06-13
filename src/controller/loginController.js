const { loginService } = require('../service');

const findUser = async (req, res) => {
  const data = req.body;
  const { status, message } = await loginService.findUser(data);

  return res.status(status).json(message);
};

module.exports = {
  findUser,
};