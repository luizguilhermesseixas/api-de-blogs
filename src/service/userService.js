const { User } = require('../models');
const { createToken } = require('../utils/JWT');

const generateToken = (email) => {
  const payload = {
    email,
  };
  const createdToken = createToken(payload);
  return createdToken;
};

const userRegister = async (data) => {
  const checkUser = await User.findOne({ where: { email: data.email } });
  if (checkUser) {
    return ({ status: 409, message: { message: 'User already registered' } });
  }
  await User.create(data);
  const token = generateToken(data.email);
  return ({ status: 201, message: { token } });
};

const userLogin = async (data) => {
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

const getAllUsers = async () => {
  const allUsers = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return {
    status: 200,
    message: allUsers,
  };
};

const getUserById = async (id) => {
  const checkUser = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  if (!checkUser) {
    return { status: 404, message: { message: 'User does not exist' } };
  }
  return { status: 200, message: checkUser };
};

module.exports = {
  userLogin,
  userRegister,
  getAllUsers,
  getUserById,
};