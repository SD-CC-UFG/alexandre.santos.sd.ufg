var express = require('express');
var router = express.Router();

/* GET user information after login */

router.get('/', isAuthenticated, function(req, res, next) {

  res.render('chatSecretaria', { name: req.session.user.username, type: req.session.user.tipo });

});

function isAuthenticated(req, res, next) {
  	if(req.session.user)
      return next();

  // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SIGNIN PAGE
  res.redirect('/signinResponsavel');
}

module.exports = router;

