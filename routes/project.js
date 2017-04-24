var express = require('express');
var router = express.Router();
var projectService = require('../src/projects');
/* GET home page. */
router.get('/:projectId', function(req, res, next) {
  var dataProject = projectService.find(req.params.projectId);
  res.render('project', { title: 'Projects-' + dataProject.name, project:dataProject() });
});

module.exports = router;
