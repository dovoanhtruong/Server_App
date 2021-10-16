var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


require('dotenv').config()
var session = require('express-session');
const mongoose=require('mongoose');
require('./Models/Model_Sign_In_Up')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var API_Sign_In_Up = require('./routes/API_Sign_In_Up');
var API_Category = require('./routes/API_Category');
var API_Shop = require('./routes/API_Shop');
var API_Food = require('./routes/APi_Food');


var app = express();
mongoose.connect(process.env.MONGODB, {useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('<< DB connected >>'))
.catch((err)=> console.log('<< DB error >>',err))


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.JWT_SECRET_KEY,
  resave: true,
  saveUninitialized:true,
  cookie:{secure:false}
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', API_Sign_In_Up);
app.use('/category', API_Category);
app.use('/shop', API_Shop);
app.use('/food', API_Food);

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
