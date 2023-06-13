const express = require('express');
const { validateLoginFields } = require('../middlewares/validateLogin');
/* const { validateJWT } = require('../middlewares/validateToken'); */
const { loginController } = require('../controller');

const router = express.Router();

router.post('/', validateLoginFields, loginController.findUser);

module.exports = router;