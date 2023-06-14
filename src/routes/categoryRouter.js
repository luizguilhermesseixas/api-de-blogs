const express = require('express');
const { categoryController } = require('../controller');
const { validateCategory } = require('../middlewares/validateCategory');
const { validateJWT } = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateJWT, validateCategory, categoryController.registerCategory);

module.exports = router;