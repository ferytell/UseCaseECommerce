const Transaction = require('../models/transaction');

module.exports = {
    transactions: async () => {
        return await Transaction.find();
    },
    addTransaction: async ({ qrCode, rfid, hargaSatuan, jumlah, tanggalJam }) => {
        const transaction = new Transaction({
            qrCode,
            rfid,
            hargaSatuan,
            jumlah,
            tanggalJam
        });
        await transaction.save();
        return transaction;
    }
};
