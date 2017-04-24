var express = require('express');
var router = express.Router();
var hopperService = require('../src/hoppers');

/* GET home page. */
router.get('/', function(req, res, next) {
  // var routeName = req.params.name;
  res.render('notable-hoppers',  { title: 'Notable Hoppers', hoppers: hopperService.getAll() });
});

module.exports = router;
