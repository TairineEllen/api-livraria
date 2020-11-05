const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerBooks');

router.get('/', controller.getBooksInStock);
router.post('/', controller.registerBook);
router.delete('/:id', controller.deleteBook);

module.exports = router;