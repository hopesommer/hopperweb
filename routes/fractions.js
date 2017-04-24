var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fractions', { title: 'Fractions' });
});

module.exports = router;
