var express = require('express');
var router = express.Router();

/* GET home page. redirect user to signin page */

router.get('/', function(req, res, next) {

  //res.redirect('/signin');
  res.render('index', { title: 'Express' });

});

module.exports = router;
