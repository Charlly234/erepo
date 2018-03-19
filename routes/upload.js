var express = require('express');
var router = express.Router();

/* upload page. */
router.all('/', function(req, res, next) {
  res.render('upload', {});
});

module.exports = router;
