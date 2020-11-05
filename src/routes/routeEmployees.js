const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerEmployees');

router.post('/', controller.registerEmployee);
router.delete('/:id', controller.deleteEmployee);

module.exports = router;