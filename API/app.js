var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
var corsOptionsDelegate = function (req, callback) {
  var corsOptions= { origin: true };
  callback(null, corsOptions);
}
require('./mongo/category/category.model.js')
require('./mongo/users/user.model.js')
require('./mongo/product/product.model.js')
require('./mongo/vaciness/vacines.model.js')

var indexRouter = require('./routes/index.js');
var usersRouter = require('./routes/users.js');
var categoryRouter = require('./routes/categories.js');
var productRouter = require('./routes/products.js');
var vacinesRouter = require('./routes/vacines.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(cors(corsOptionsDelegate));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


// kết nối database mongodb
mongoose.connect('mongodb://localhost:27017/wb503')
.then(()=>{console.log('Kết nối thành công')})
.catch(err=> console.log(err))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/categories', categoryRouter );
app.use('/products', productRouter );
app.use('/vacines', vacinesRouter );

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
