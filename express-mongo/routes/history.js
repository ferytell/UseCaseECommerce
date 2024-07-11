var express = require('express');
var router = express.Router();
var Transaction = require('../models/transaction');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/hello', function(req, res, next) {
  res.send('hello from express mongo');
});


module.exports = router;
