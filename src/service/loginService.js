const { User } = require('../models');
const { createToken } = require('../utils/JWT');

const generateToken = (email) => {
  const payload = {
    email,
  };
  const createdToken = createToken(payload);
  return createdToken;
};

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
  const token = generateToken(data.email);
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