var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('marie-curie', { title: 'Marie Curie' });
});

module.exports = router;
