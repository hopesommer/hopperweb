var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('raspberry-pi', { title: 'Raspberry Pi' });
});

module.exports = router;
