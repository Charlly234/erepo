var express = require('express');
var router = express.Router();

/* login page. */
router.all('/login', function(req, res, next) {
  res.render('login', {});
});

/* signup page. */
router.all('/signup', function(req, res, next) {
  res.render('signup', {});
});

module.exports = router;
