const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerBooks');

router.get('/', controller.getBooksInStock);
router.get('/editoras', controller.getBooksByPublisher);
router.post('/', controller.registerBook);
router.put('/:id', controller.updateBookWithPut);
router.delete('/:id', controller.deleteBook);

module.exports = router;