const express = require('express');
const router = express.Router();

const BookController = require('../controllers/book');

router.get('/',BookController.find);
router.post('/', BookController.create);

module.exports = router;
