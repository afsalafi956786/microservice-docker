const express = require('express');
const bookController = require('../controller/book')
const router = express.Router();


router.post('/add-book',bookController.addBook);
router.get('/:bookId',bookController.getBookById)

module.exports = router;