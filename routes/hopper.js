var express = require('express');
var router = express.Router();
var hopperService = require('../src/hoppers');
/* GET home page. */
router.get('/:hopperId', function(req, res, next) {
  var data = hopperService.find(req.params.hopperId);
  res.render('hopper', { title: 'Hopper DIY-'+ data.name, hopper:data });
});

module.exports = router;
