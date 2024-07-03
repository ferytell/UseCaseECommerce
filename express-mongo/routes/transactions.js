const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');
const redisClient = require('../connection/redisClient');

// Save transaction to MongoDB and cache in Redis
router.post('/save-transaction', async (req, res) => {
    const { qrCode, rfid, hargaSatuan, jumlah, tanggalJam } = req.body;

    try {
        const transaction = new Transaction({ qrCode, rfid, hargaSatuan, jumlah, tanggalJam });
        await transaction.save();

        // Cache the transaction in Redis
        redisClient.set(`transaction:${transaction._id}`, JSON.stringify(transaction));

        res.status(201).json(transaction);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get transaction from Redis cache or MongoDB
router.get('/get-transaction/:id', async (req, res) => {
    const transactionId = req.params.id;

    try {
        // Check Redis cache first
        redisClient.get(`transaction:${transactionId}`, async (err, data) => {
            if (err) throw err;

            if (data) {
                // If data exists in cache, return it
                return res.json(JSON.parse(data));
            } else {
                // If data does not exist in cache, query MongoDB
                const transaction = await Transaction.findById(transactionId);

                if (!transaction) {
                    return res.status(404).json({ msg: 'Transaction not found' });
                }

                // Cache the transaction in Redis
                redisClient.set(`transaction:${transaction._id}`, JSON.stringify(transaction));

                return res.json(transaction);
            }
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
