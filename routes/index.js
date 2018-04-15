var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dashboard' });
});

router.get('/activity', function(req, res, next) {
  res.render('activity', { title: 'Gateway Activity' });
});

router.get('/coverage', function(req, res, next) {
  res.render('coverage', { title: 'Network Coverage' });
});

module.exports = router;
