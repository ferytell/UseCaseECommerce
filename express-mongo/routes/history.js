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



router.post('/multiple-transactions', async (req, res) => {
  try {
    const transactions = req.body.transactions; // Expecting an array of transactions
    const savedTransactions = await Transaction.insertMany(transactions);
    res.status(201).json(savedTransactions);
  } catch (error) {
    console.error('Error saving multiple transactions:', error);
    res.status(500).json({ message: 'Error saving multiple transactions' });
  }
});

module.exports = router;
