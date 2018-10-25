var express = require('express');
var router = express.Router();

/* GET user information after login */

router.get('/', isAuthenticated, function(req, res, next) {

  var username   = req.session.user.username;
  var nome  = req.session.user.nome;
  var cpf = req.session.user.cpf;
  
  res.render('userResponsavel', { username: username, nome: nome, cpf: cpf });

});

function isAuthenticated(req, res, next) {
  if (req.session.user && req.session.user.tipo === 'responsavel')
      return next();

  // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SIGNIN PAGE
  res.redirect('/signinResponsavel');
}

module.exports = router;
