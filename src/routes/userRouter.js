const express = require('express');
const { userController } = require('../controller');
const { validateRegisterFields } = require('../middlewares/validateUser');

const router = express.Router();

router.post('/', validateRegisterFields, userController.userRegister);

module.exports = router;