const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Transaction {
    id: ID!
    qrCode: String!
    rfid: String!
    hargaSatuan: Float!
    jumlah: Int!
    tanggalJam: String!
  }

  type Query {
    transactions: [Transaction]
  }

  type Mutation {
    addTransaction(qrCode: String!, rfid: String!, hargaSatuan: Float!, jumlah: Int!, tanggalJam: String!): Transaction
  }
`);
