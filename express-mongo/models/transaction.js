const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    qrCode: String,
    rfid: String,
    hargaSatuan: Number,
    jumlah: Number,
    tanggalJam: Date
});

module.exports = mongoose.model('Transaction', transactionSchema);
