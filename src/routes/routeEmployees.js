const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerEmployees');

router.get('/', controller.getAllEmployees);
router.get('/:id/idade', controller.getAgeEmployeeById);
router.post('/', controller.registerEmployee);
router.put('/:id', controller.updateEmployeeWithPut);
router.delete('/:id', controller.deleteEmployee);

module.exports = router;