/*Developers: Alexandre Oliveira / Guilherme Ferreira / Lúcio Flavio.
  Credits: Article based to create session and auttentication inspired initially by: http://programmerblog.net/nodejs-passport-login-mysql/
  Project developed to the  discipline of Distributed Systems (2018-2) - Universidade Federal de Goiás.
*/

var cluster = require('cluster');
if(cluster.isMaster){
  var cpuCount = require('os').cpus().length;

  for(var i=0; i < cpuCount; i += 1){
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal)=>{
    console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`)
    console.log('Starting a new worker');
    cluster.fork();
  });

}else{

var express = require('express'),
path = require('path'),
favicon = require('serve-favicon'),
logger = require('morgan'),
cookieParser = require('cookie-parser'),
bodyParser = require('body-parser');

var index = require('./routes/index');
var chat = require('./routes/chat');
var usersResponsavel = require('./routes/usersResponsavel');
var usersSecretaria = require('./routes/usersSecretaria');
var indexLogged = require('./routes/indexLogged');
var studentRegistration = require('./routes/studentRegistration');
var responsavelRegistration = require('./routes/responsavelRegistration');
var successStudentRegister = require('./routes/successStudentRegister');
var successResponsavelRegister = require('./routes/successResponsavelRegister');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//login script from here

var flash    = require('connect-flash');
var crypto   = require('crypto');

/* Login script */
var passport = require('passport');
var LocalStrategy  = require('passport-local').Strategy;
var connection     = require('./lib/dbconn');

 var sess  = require('express-session');
 /*Changing In Memory Sessions (I'll transfer to Redis due the new support to Clusters)*/
 /*var Store = require('express-session').Store
 var BetterMemoryStore = require(__dirname + '/memory')
 var store = new BetterMemoryStore({ expires: 60 * 60 * 1000, debug: true })
 app.use(sess({
    name: 'JSESSION',
    secret: 'MYSECRETISVERYSECRET',
    store:  store,
    resave: true,
    saveUninitialized: true
}));*/

// Setting and using redis as session store for Express.
 var redis = require('redis');
 var redisStore = require('connect-redis')(sess);
 var client = redis.createClient();

 client.on('connect', function(){
  console.log('Redis client connected');
 })
 
 client.on('error', function(){
  console.log('Something went wrong ' +err);
 })

 app.use(sess({
  secret : 'keyboard cat',
  store : new redisStore({host : '127.0.0.1', port: 6379, ttl : 260}),
  saveUninitialized : false,
  resave : false
 }))

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/usersResponsavel', usersResponsavel);
app.use('/usersSecretaria', usersSecretaria);
app.use('/indexLogged', indexLogged);
app.use('/studentRegistration', studentRegistration);
app.use('/successStudentRegister', successStudentRegister);
app.use('/responsavelRegistration', responsavelRegistration);
app.use('/successResponsavelRegister', successStudentRegister);

/* Código que usarei para criptografar quando formos cadastrar um usuário, trocar senha ou recuperar uma senha
var passTest = '4321';
var Secsalt = '7fa73b47df808d36c5fe328546ddef8b9011b2c6';
saltTest = Secsalt+''+passTest;
var encPasswordTest = crypto.createHash('sha1').update(saltTest).digest('hex');
 console.log(encPasswordTest);
*/

//passport Strategy -- the express session middleware for Autentication before calling passport.session()
passport.use('secretaria-local', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true //passback entire req to call back
} , function (req, username, password, done){
      console.log(username+' = '+ password);
      if(!username || !password ) { return done(null, false, req.flash('message','Todos os campos são requeridos.')); }
      var salt = '7fa73b47df808d36c5fe328546ddef8b9011b2c6';

      connection.query("select * from tbl_secretaria where username = ?", [username], function(err, rows){
          console.log(err);
        if (err) return done(req.flash('message',err));

        if(!rows.length){ return done(null, false, req.flash('message','Usuário inválido.')); }
        salt = salt+''+password;
        var encPassword = crypto.createHash('sha1').update(salt).digest('hex');
        var dbPassword  = rows[0].password;
        
        if(!(dbPassword == encPassword)){
            return done(null, false, req.flash('message','Senha inválida.'));
         }
         req.session.user = rows[0];
        return done(null, rows[0]);
      });
    }
));

passport.use('responsaveis-local', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true //passback entire req to call back
} , function (req, username, password, done){
      console.log(username+' = '+ password);
      if(!username || !password ) { return done(null, false, req.flash('message','Todos os campos são requeridos.')); }
      var salt = '7fa73b47df808d36c5fe328546ddef8b9011b2c6';

      connection.query("select * from tbl_responsaveis where username = ?", [username], function(err, rows){
          console.log(err);
        if (err) return done(req.flash('message',err));

        if(!rows.length){ return done(null, false, req.flash('message','Usuário inválido.')); }
        salt = salt+''+password;
        var encPassword = crypto.createHash('sha1').update(salt).digest('hex');
        var dbPassword  = rows[0].password;
        
        if(!(dbPassword == encPassword)){
            return done(null, false, req.flash('message','Senha inválida.'));
         }
         req.session.user = rows[0];
        return done(null, rows[0]);
      });
    }
));

passport.serializeUser(function(user, done){
    done(null, {
      cpf  : user.cpf,
      tipo : user.tipo
    });
});

passport.deserializeUser(function(user, done){
    var table = user.tipo === 'secretaria' ? 'tbl_secretaria' : 'tbl_responsaveis';
    connection.query('select * from ?? where cpf = ?', [table, user.cpf], function (err, rows){
      if(err){
        return done(err);
      } else if(!Array.isArray(rows) || ! rows.length){
        return done();
      } else{
        return done(err, rows[0]);
      }
    });
});

app.get('/signinResponsavel', function(req, res){
  res.render('login/index',{'message' :req.flash('message')});
});

app.post("/signinResponsavel", passport.authenticate('responsaveis-local', {
    successRedirect: '/usersResponsavel',
    failureRedirect: '/signinResponsavel',
    failureFlash: true
}), function(req, res, info){
    res.render('login/index',{'message' :req.flash('message')});
});

app.get('/signinSecretaria', function(req, res){
  res.render('login/indexAdmin',{'message' :req.flash('message')});
});

app.post("/signinSecretaria", passport.authenticate('secretaria-local', {
    successRedirect: '/usersSecretaria',
    failureRedirect: '/signinSecretaria',
    failureFlash: true
}), function(req, res, info){
    res.render('login/indexAdmin',{'message' :req.flash('message')});
});

app.get('/logout', function(req, res){
    req.session.destroy();
    req.logout();
    res.redirect('/signinResponsavel');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Infelizmente essa página não existe! :(');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var PORTA = 3001;

app.listen(PORTA, () =>{/*Colocar servidor em funcionamento*/
  console.log('Servidor em funcionamento em: http://localhost:%d', PORTA);
  console.log('Para finalizar: pressione Ctrl+C');
})

console.log('Worker %d running!', cluster.worker.id);
}

module.exports = app;