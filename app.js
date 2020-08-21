var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose');
var session=require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
<<<<<<< HEAD
var doctorsRouter=require('./routes/doctors')
var diseasesRouter=require('./routes/diseases');
=======
var doctorsRouter=require('./routes/doctors');

>>>>>>> 98821152a219853da778e54750d9ac1be63f19dd


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: "chichi1999",
  resave:false,
  saveUnintialized:true
}));


mongoose.connect('mongodb://127.0.0.1/healthylife');
var db=mongoose.connection;
db.on('error',console.error.bind(console,"Mongodb connection error"));

app.use('/', indexRouter);

app.use('/users', usersRouter);
<<<<<<< HEAD
app.use('/doctors',doctorsRouter);
app.use('/diseases',diseasesRouter)

=======
>>>>>>> 98821152a219853da778e54750d9ac1be63f19dd


app.use(function (req,res,next) {
  if(req.session.user){
  next();
  }else{
    res.redirect('/signin');
  }
});
app.use('/doctors',doctorsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
