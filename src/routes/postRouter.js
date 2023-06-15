const express = require('express');
const { postController } = require('../controller');
const { validatePostFields } = require('../middlewares/validatePost');
const { validateJWT } = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateJWT, validatePostFields, postController.postRegister);

module.exports = router;