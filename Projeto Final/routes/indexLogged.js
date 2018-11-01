var express = require('express');
var router = express.Router();

/* GET user information after login */

router.get('/', isAuthenticated, function(req, res, next) {
  var nome    = req.session.user.nome ;
  req.session.user.tipo === 'secretaria' ? res.render('indexLogged', { nome : nome}) : res.render('indexLoggedResponsavel', { nome : nome}) ;
  
});

function isAuthenticated(req, res, next) {
  if (req.session.user)
      return next();
  // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SIGNIN PAGE
  res.redirect('/signinResponsavel');
}

module.exports = router;
