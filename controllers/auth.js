var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* login page. */
router.all('/login', (req, res, next) => {
  res.render('login', {});
});

/* signup page. */
router.all('/signup', async (req, res, next) => {
  if (req.method == "POST") {
    var user = User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    await user.save();
    res.redirect('/');
  }

  res.render('signup', {});
});

module.exports = router;