var express = require('express');
var crypto   = require('crypto');
var path = require('path');
var connection = require(path.resolve('lib/dbconn'));
var router = express.Router();

router.get('/', isAuthenticated, function(req, res, next) {

  res.render('studentRegistration');

});

router.post('/', isAuthenticated, function(req, res, next) {

	var nome = req.body.nome;
	var sobrenome = req.body.sobrenome;
	var turma = req.body.turma;
	var age = req.body.age;
	var cpf_responsavel = req.body.cpf_responsavel;
	var username = req.body.username;
	var password = req.body.password;

	var salt = '7fa73b47df808d36c5fe328546ddef8b9011b2c6';
	var saltTest = salt+''+password;
	var encPassword = crypto.createHash('sha1').update(saltTest).digest('hex');
	var password = encPassword;

	var data = [
		[nome, sobrenome, turma, age, cpf_responsavel, username, password]
	];
	
	var sql = "INSERT INTO tbl_students (nome, sobrenome, turma, age, cpf_responsavel, username, password) VALUES ?";

	try{
	    connection.query(sql, [data], function(err, result, done){
	        if (err) throw err;
	        console.log("Number of records inserted: " + result.affectedRows);
	        res.render('successRegister', { nome: nome, turma: turma, cpf_responsavel: cpf_responsavel});
		});
	}catch(error){
		console.error(error);
	}
});	

function isAuthenticated(req, res, next) {
  if (req.session.user)
      return next();

  res.redirect('/signin');
}

module.exports = router;