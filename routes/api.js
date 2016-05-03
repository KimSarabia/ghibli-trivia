var express = require('express');
var router = express.Router();

/* GET questions listing. */
router.use('/questions', require('./questions'));

module.exports = router;
