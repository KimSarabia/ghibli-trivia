var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use('/questions', require('./questions'));

module.exports = router;
