const express = require('express');
const { userController } = require('../controller');
const { validateJWT } = require('../middlewares/validateToken');
const { validateRegisterFields } = require('../middlewares/validateUser');

const router = express.Router();

router.post('/', validateRegisterFields, userController.userRegister);

router.get('/', validateJWT, userController.getAllUsers);

router.get('/:id', validateJWT, userController.getUserById);

module.exports = router;