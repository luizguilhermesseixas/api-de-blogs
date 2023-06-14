const express = require('express');
const { validateLoginFields } = require('../middlewares/validateUser');
/* const { validateJWT } = require('../middlewares/validateToken'); */
const { userController } = require('../controller');

const router = express.Router();

router.post('/', /* validateJWT */validateLoginFields, userController.userLogin);

module.exports = router;