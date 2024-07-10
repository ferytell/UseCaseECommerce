const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    qrCode: String,
    rfid: String,
    hargaSatuan: Number,
    jumlah: Number,
    tanggalJam: Date
});

// const transactionsSchema = new mongoose.Schema({
//     qrCode: {
//       type: String,
//       required: true
//     },
//     rfid: {
//       type: String,
//       required: true
//     },
//     jumlah: {
//       type: Number,
//       required: true
//     },
//     date: {
//       type: Date,
//       default: Date.now
//     }
//   });
  
  

module.exports = mongoose.model('Transaction', transactionSchema);
