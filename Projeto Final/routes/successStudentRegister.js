var express = require('express');
var router = express.Router();

/* GET user information after login */

router.get('/', isAuthenticated, function(req, res, next) {
  
  res.render('successStudentRegister', { nome: nome, turma: turma, cpf_responsavel: cpf_responsavel});

});

function isAuthenticated(req, res, next) {
  if (req.session.user && req.session.user.tipo === 'secretaria')
      return next();

  // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SIGNIN PAGE
  res.redirect('/signin');
}

module.exports = router;
