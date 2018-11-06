var express = require('express');
var router = express.Router();

/* GET home page. redirect user to signin page */

router.get('/', isAuthenticated, function(req, res, next) {

  var nome    = req.session.user.nome ;
  req.session.user.tipo === 'secretaria' || req.session.user.tipo === 'responsavel' ? res.redirect('indexLogged') : res.render('index') ;

  //res.redirect('/signin');
  //res.render('index', { title: 'Express' });

});

function isAuthenticated(req, res, next) {
  if (req.session.user)
      return next();
  // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM INDEX PAGE
  res.render('index');
}

module.exports = router;
