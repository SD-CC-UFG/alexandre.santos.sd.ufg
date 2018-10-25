var express = require('express');
var router = express.Router();

/* GET user information after login */

router.get('/', isAuthenticated, function(req, res, next) {

  var username   = req.session.user.username;
  var nome  = req.session.user.nome;
  var cpf = req.session.user.cpf;
  
  res.render('userSecretaria', { username: username, nome: nome, cpf: cpf });

});

function isAuthenticated(req, res, next) {
  if (req.session.user && req.session.user.tipo === 'secretaria') //CONFIRMAR SE A SEGUNDA CLAUSULA IRÁ IMPEDIR DE USUARIOS COM SESSÃO RESPONSAVEIS SERAO IMPEDIDOS DE ACESSAR ESSA ROTA...
      return next();

  // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SIGNIN PAGE
  res.redirect('/signinSecretaria');
}

module.exports = router;
