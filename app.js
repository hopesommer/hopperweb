var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var notableHoppers = require('./routes/notable-hoppers');
var projects = require('./routes/projects');
var raspberryPi = require('./routes/raspberry-pi');
var pc = require('./routes/pc');
var android = require('./routes/android');
var apple = require('./routes/apple');
var contact = require('./routes/contact');
var appMenu = require('./routes/app-menu');
var story = require('./routes/story');
var about = require('./routes/about');
var bugs = require('./routes/bugs');
var dna = require('./routes/dna');
var plants = require('./routes/plants');
var candy = require('./routes/candy');
var colors = require('./routes/colors');
var fractions = require('./routes/fractions');
var money = require('./routes/money');
var multiplication = require('./routes/multiplication');
var gravity = require('./routes/gravity');
var light = require('./routes/light');
var mechanics = require('./routes/mechanics');
var hopper = require('./routes/hopper');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/users', users);
app.use('/notable-hoppers', notableHoppers);
app.use('/projects', projects);
app.use('/raspberry-pi', raspberryPi);
app.use('/pc', pc);
app.use('/android', android);
app.use('/apple', apple);
app.use('/hoppers', hopper);
app.use('/contact', contact);
app.use('/app-menu', appMenu);
app.use('/story', story);
app.use('/about', about);
app.use('/bugs', bugs);
app.use('/dna', dna);
app.use('/plants', plants);
app.use('/candy', candy);
app.use('/colors', colors);
app.use('/fractions', fractions);
app.use('/money', money);
app.use('/multiplication', multiplication);
app.use('/gravity', gravity);
app.use('/light', light);
app.use('/mechanics', mechanics);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
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

module.exports = app;
