require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var historyRouter = require('./routes/history');
var transactionRoutes = require('./routes/transactions');
var multipleTransactionRoutes = require('./routes/multipleTransaction')
const connectDB = require('./connection/mongoDb');
const redisClient = require('./connection/redisClient');


var app = express();

connectDB();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/history', historyRouter);
app.use('/api/transactions', transactionRoutes);
app.use('/api/multiple-transactions', multipleTransactionRoutes);


module.exports = app;
