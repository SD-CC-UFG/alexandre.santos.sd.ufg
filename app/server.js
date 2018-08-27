const express = require('express') /*Chamar o express*/
const server = express() /*Criando o server (createserver do HTTP)*/
server.set('view engine', 'pug')

var bodyParser = require('body-parser')
server.use(bodyParser.urlencoded({
	extended : true
}))

server.get('/', (req, res) => {
	res.render('index', {})
	/*Ex caso fosse passar valores para view > res.render('questao1', { title: 'Hey', message: 'Hello there!'});*/
})

server.get('/questao1', (req, res) => {
	res.render('questao1', {})
	/*res.send(`
			<h1>Questao #1: Reajuste de Salários</h1>
			<div align="center">
				<form action ="/reajusta" method="POST">
				<p> Digite a seguir o seu nome, salário e cargo para calculo do reajuste: </p>
					<label for="nome"> Nome:</label>
					<input type="nome" name="nome" id="nome">
					<br>
					<label for="salario"> Salario:</label>
					<input type="salario" name="salario" id="salario">
					<br>
					<label for="cargo"> Cargo:</label>
					<input type="cargo" name="cargo" id="cargo">
					<br><br>
					<input type="submit" value="Calcular Reajuste">
				</form>
				<br>
				<h2> Valores de referencia:</h2>
				<p>Cargo operador: Reajuste de 20%</p>
				<p>Cargo programador: Reajuste de 18%</p>
			<div>
		`)*/
})

server.post('/reajusta', (req, res)=>{
	var nome = req.body.nome
	var cargo = req.body.cargo
	var salario = req.body.salario
	salario = parseFloat(salario)

	switch (cargo){
		case "operador": //recebe reajuste de 20%
			salario = salario + (salario * 0.20)
			break

		case "programador": //recebe reajuste de 18%
			salario = salario + (salario * 0.18)
			break
	}

	res.send('<h1>Seja bem vindo(a): ' +nome +'! <br></h1> <h2>Cargo: ' +cargo +' </h2> <h2>Seu novo salario apos reajuste: ' +salario +'</h2>')
})


server.get('/questao2', (req, res) => {
	res.render('questao2', {})
})

server.post('/maiorMenor', (req, res)=>{
	var nome = req.body.nome
	var sexo = req.body.sexo
	var idade = req.body.idade
	idade = +idade
	if(sexo == 'masculino'){
		if(idade >= 18){
			res.send('<h1>Sexo Masculino. <br> Nome usuario(a) ' +nome +'<br> Status: Maior de idade</h1>')
		}else{
			res.send('<h1>Sexo Masculino. <br> Nome usuario(a) ' +nome +'<br> Status: Menor de idade</h1>')
		}
	}else if(sexo == 'feminino'){
		if(idade >= 21){
			res.send('<h1>Sexo Feminino. <br> Nome usuario(a) ' +nome +'<br> Status: Maior de idade</h1>')
		}else{
			res.send('<h1>Sexo Feminino. <br> Nome usuario(a) ' +nome +'<br> Status: Menor de idade</h1>')
		}
	}
	else{
		res.send('<h1>Sexo invalido. <br> Clique em retornar e insira novamente!</h1>')
	}
})


server.get('/questao3', (req, res) => {
	res.render('questao3', {})
})

server.post('/resultadoNotas', (req, res)=>{
	var nota1 = parseFloat(req.body.nota1)
	var nota2 = parseFloat(req.body.nota2)
	var nota3 = parseFloat(req.body.nota3)

	/*nota1 = parseFloat(nota1)
	nota2 = parseFloat(nota2)
	nota3 = parseFloat(nota3)*/

	var media = ((nota1+nota2)/2)
	var mediaFinal = ((media+nota3)/2)

	if(media >= 7){
		res.send('<h1>Resultado: '+media +'.<br> Estudante aprovado(a)!</h1>')
	}else if(mediaFinal > 5){
		res.send('<h1>Resultado: '+mediaFinal +'.<br> Estudante realizou exame N3 e foi aprovado(a)!</h1>')
	}else if(media > 3 && media < 7){
		res.send('<h1>Resultado: '+media +'.<br> Estudante devera realizar exame N3!</h1>')
	}else{
		res.send('<h1>Resultado: '+media +'.<br> Estudante reprovado(a)!</h1>')
	}
})


server.get('/questao4', (req, res) => {
	res.render('questao4', {})
})

server.post('/pesoIdeal', (req, res)=>{
	var altura = parseFloat(req.body.altura)
	var sexo = req.body.sexo
	var peso = null

	switch(sexo){
		case "masculino":
			peso = ((72.7 * altura) - 58)
			res.send('<h1>Sexo: '+sexo +' | Altura: ' +altura +'<br> Peso ideal: ' +peso +'.</h1>')
		break
		case "feminino":
			peso = ((62.1 * altura) - 44.7)
			res.send('<h1>Sexo: '+sexo +' | Altura: ' +altura +'<br> Peso ideal: ' +peso +'.</h1>')
		break
		default:
			res.send('<h1>Verifique os dados inseridos e tente novamente!</h1>')
	}
})


server.get('/questao5', (req, res) => {
	res.render('questao5', {})
})

server.post('/categoriaNadador', (req, res)=>{
	var idade = parseInt(req.body.idade)

	if(idade >= 5 && idade < 8){
		res.send('<h1>Idade: '+idade +'<br> Categoria: Infantil A</h1>')
	}else if(idade >= 8 && idade < 11){
		res.send('<h1>Idade: '+idade +'<br> Categoria: Infantil B</h1>')
	}else if(idade >= 11 && idade < 14){
		res.send('<h1>Idade: '+idade +'<br> Categoria: Juvenil A</h1>')
	}else if(idade >= 14 && idade < 18){
		res.send('<h1>Idade: '+idade +'<br> Categoria: Juvenil B</h1>')
	}else if(idade >= 18){
		res.send('<h1>Idade: '+idade +'<br> Categoria: Adulto</h1>')
	}else{
		res.send('<h1>A idade informada nao pode ser relacionada a nenhuma categoria.</h1>')
	}
})


server.get('/questao6', (req, res) => {
	res.render('questao6', {})
})

server.post('/salarioLiquido', (req, res)=>{
	var nome = req.body.nome
	var nivel = req.body.nivel
	var salBruto = parseFloat(req.body.salBruto)
	var numDepend = parseInt(req.body.numDepend)
	var salarioLiquido = null

	switch(nivel){
		case 'A':
			if(numDepend >= 1){
				salarioLiquido = (salBruto - (salBruto * 0.08))
			}else{
				salarioLiquido = (salBruto - (salBruto * 0.03))
			}
			res.send('<h1>Nome: '+nome +' | Nivel: ' +nivel +'<br> Salario Liquido: ' +salarioLiquido +'</h1>')
		break

			case 'B':
			if(numDepend >= 1){
				salarioLiquido = (salBruto - (salBruto * 0.1))
			}else{
				salarioLiquido = (salBruto - (salBruto * 0.05))
			}
			res.send('<h1>Nome: '+nome +' | Nivel: ' +nivel +'<br> Salario Liquido: ' +salarioLiquido +'</h1>')
		break

		case 'C':
			if(numDepend >= 1){
				salarioLiquido = (salBruto - (salBruto * 0.15))
			}else{
				salarioLiquido = (salBruto - (salBruto * 0.08))
			}
			res.send('<h1>Nome: '+nome +' | Nivel: ' +nivel +'<br> Salario Liquido: ' +salarioLiquido +'</h1>')
		break

		case 'D':
			if(numDepend >= 1){
				salarioLiquido = (salBruto - (salBruto * 0.17))
			}else{
				salarioLiquido = (salBruto - (salBruto * 0.1))
			}
			res.send('<h1>Nome: '+nome +' | Nivel: ' +nivel +'<br> Salario Liquido: ' +salarioLiquido +'</h1>')
		break

		default:
		res.send('<h1>Verifique os valores inseridos e tente novamente!</h1>')
	}
})


server.get('/questao7', (req, res) => {
	res.render('questao7', {})
})

server.post('/verificaAposentadoria', (req, res)=>{
	var idade = parseInt(req.body.idade)
	var tempoServ = parseInt(req.body.tempoServ)
	var sexo = req.body.sexo

	switch(sexo){
		case 'masculino':
			if(idade >= 65 && tempoServ >= 30){
				res.send('<h1>Trabalhador - Idade: ' +idade +' | Tempo de Servico ' +tempoServ +' Sexo: ' +sexo +'<br> Status: Apto para aposentadoria!</h1>')
			}else{
				res.send('<h1>Trabalhador - Idade: ' +idade +' | Tempo de Servico ' +tempoServ +' Sexo: ' +sexo +'<br> Status: Inapto para aposentadoria!</h1>')
			}
		break;

		case 'feminino':
		if(idade >= 60 && tempoServ >= 25){
				res.send('<h1>Trabalhadora - Idade: ' +idade +' | Tempo de Servico ' +tempoServ +' Sexo: ' +sexo +'<br> Status: Apta para aposentadoria!</h1>')
			}else{
				res.send('<h1>Trabalhadora - Idade: ' +idade +' | Tempo de Servico ' +tempoServ +' Sexo: ' +sexo +'<br> Status: Inapta para aposentadoria!</h1>')
			}
		break;

		default:
			res.send('<h1>Verifique os valores inseridos e tente novamente!</h1>')
	}
})


server.get('/questao8', (req, res) => {
	res.render('questao8', {})
})

server.post('/concedeCredito', (req, res)=>{
	var saldoMedio = parseFloat(req.body.saldoMedio)
	var credito = null

	if(saldoMedio < 201){
		res.send('<h1>Saldo Medio do Cliente: ' +saldoMedio +' <br> Nenhum credito especial disponivel!</h1>')
	}else if(saldoMedio >= 201 && saldoMedio < 401){
		credito = (saldoMedio * 0.2)
		res.send('<h1>Saldo Medio do Cliente: ' +saldoMedio +' | Percentual de credito disponivel: 20%. <br><br>Credito Disponivel: ' +credito +' </h1>')
	}else if(saldoMedio >= 401 && saldoMedio < 601){
		credito = (saldoMedio * 0.3)
		res.send('<h1>Saldo Medio do Cliente: ' +saldoMedio +' | Percentual de credito disponivel: 30%. <br><br>Credito Disponivel: ' +credito +' </h1>')
	}else if(saldoMedio >= 601){
		credito = (saldoMedio * 0.4)
		res.send('<h1>Saldo Medio do Cliente: ' +saldoMedio +' | Percentual de credito disponivel: 40%. <br><br>Credito Disponivel: ' +credito +' </h1>')
	}else{
		res.send('<h1>Verifique os valores inseridos e tente novamente!</h1>')
	}
})


server.listen(3001, () =>{/*Colocar servidor em funcionamento*/
	console.log('Servidor em funcionamento em: http://localhost:3001')
	console.log('Para finalizar: pressione Ctrl+C')
})