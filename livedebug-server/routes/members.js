const express = require('express');
const router = express.Router();

const MemberController = require('../controllers/member');

router.get('/',MemberController.find);
router.post('/', MemberController.create);

module.exports = router;
