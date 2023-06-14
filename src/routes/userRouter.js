const express = require('express');
const { userController } = require('../controller');
const { validateJWT } = require('../middlewares/validateToken');
const { validateRegisterFields } = require('../middlewares/validateUser');

const router = express.Router();

router.post('/', /* validateJWT, */ validateRegisterFields, userController.userRegister);

router.get('/', validateJWT, userController.getAllUsers);

module.exports = router;