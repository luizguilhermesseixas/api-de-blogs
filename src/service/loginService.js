const { User } = require('../models');
const { createToken } = require('../utils/JWT');

const findUser = async (data) => {
  const verifyLogin = await User.findOne({ where: { email: data.email } });
  if (!verifyLogin) {
    return {
      status: 400,
      message: {
        message: 'Invalid fields',
      },
    };
  }
  const payload = {
    email: data.email,
  };

  const token = createToken(payload);

  return {
    status: 200,
    message: {
      token,
    },
  };
};

module.exports = {
  findUser,
};