var mongoose = require('mongoose');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
// var ejs = require('ejs');

var app = express();
mongoose.connect('mongodb://localhost/leaderboard',{ useNewUrlParser: true })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var session = require('express-session');
var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(session({secret: "i am batman"}));
var mainController = require('./controller/mainController');

app.use('/', mainController);


app.listen(8080, '127.0.0.1');
