var express = require('express');
var router = express.Router();

/* GET user information after login */

router.get('/', isAuthenticated, function(req, res, next) {
  var full_name    = req.session.user.full_name ;
  res.render('indexLogged', { full_name : full_name});

});

function isAuthenticated(req, res, next) {
  if (req.session.user)
      return next();
  // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SIGNIN PAGE
  res.redirect('/signin');
}

module.exports = router;
