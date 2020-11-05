const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerEmployees');

router.get('/', controller.getAllEmployees);
router.post('/', controller.registerEmployee);
router.delete('/:id', controller.deleteEmployee);

module.exports = router;