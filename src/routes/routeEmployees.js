const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerEmployees');

router.post('/', controller.registerEmployee);

module.exports = router;