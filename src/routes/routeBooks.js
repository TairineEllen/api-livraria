const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerBooks');

router.post('/', controller.postBook);

module.exports = router;