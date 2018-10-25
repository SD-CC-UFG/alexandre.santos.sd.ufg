var express = require('express');
var crypto   = require('crypto');
var path = require('path');
var connection = require(path.resolve('lib/dbconn'));
var router = express.Router();

router.get('/', isAuthenticated, function(req, res, next) {

  res.render('responsavelRegistration');

});

router.post('/', isAuthenticated, function(req, res, next) {

	var nome = req.body.nome;
	var sobrenome = req.body.sobrenome;
	var age = req.body.age;
	var cpf = req.body.cpf;
	var username = req.body.username;
	var password = req.body.password;

	var salt = '7fa73b47df808d36c5fe328546ddef8b9011b2c6';
	var saltTest = salt+''+password;
	var encPassword = crypto.createHash('sha1').update(saltTest).digest('hex');
	var password = encPassword;

	var data = [
		[nome, sobrenome, age, cpf, username, password]
	];
	
	var sql = "INSERT INTO tbl_responsaveis (nome, sobrenome, age, cpf, username, password) VALUES ?";

	try{
	    connection.query(sql, [data], function(err, result, done){
	        if (err) throw err;
	        console.log("Number of records inserted: " + result.affectedRows);
	        res.render('successResponsavelRegister', { nome: nome, cpf: cpf});
		});
	}catch(error){
		console.error(error);
	}
});	

function isAuthenticated(req, res, next) {
  if (req.session.user && req.session.user.tipo === 'secretaria')
      return next();

  res.redirect('/signinResponsavel');
}

module.exports = router;