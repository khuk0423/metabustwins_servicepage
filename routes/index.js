var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Main' });
});

router.get('/introduction', function(req, res, next) {
  res.render('introduction', { title: 'Introduction' })
});

router.get('/technology', function(req, res, next) {
  res.render('technology', { title: 'Technology' })
});

router.get('/vision', function(req, res, next) {
  res.render('vision', { title: 'Vision' })
});

router.get('/news', function(req, res, next) {
  res.render('news', { title: 'News' })
});

router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Service' })
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' })
});

module.exports = router;