var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hedy-lamar', { title: 'Hedy Lamar' });
});

module.exports = router;
