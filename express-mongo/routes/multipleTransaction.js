const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');
const redisClient = require('../connection/redisClient');
const axios = require('axios')
require('dotenv').config();


// POST multiple transactions
router.post('/', async (req, res) => {
  try {
    const transactions = req.body.transactions; // Expecting an array of transactions
    const qrCode = transactions[0].qrCode;

    // Transform data for MongoDB
    const transformedTransactions = {
      qrCode: qrCode,
      items: transactions.map(transaction => ({
        rfid: transaction.rfid,
        jumlah: transaction.jumlah
      }))
    };

    // Save the transformed data to MongoDB
    const savedTransaction = await Transaction.create(transformedTransactions);
    console.log('transformedTransactions==', transformedTransactions)
    const postgressAPI = process.env.POSTGRESSAPI;
    
    // Send each transaction to the Java backend
    for (const transaction of transactions) {
      await axios.post(postgressAPI, transaction, {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    res.status(201).json(savedTransaction);
  } catch (error) {
    console.error('Error saving multiple transactions:', error);
    res.status(500).json({ message: 'Error saving multiple transactions' });
  }
});


module.exports = router;
