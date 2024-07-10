const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');
const redisClient = require('../connection/redisClient');


// POST multiple transactions
router.post('/', async (req, res) => {
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
