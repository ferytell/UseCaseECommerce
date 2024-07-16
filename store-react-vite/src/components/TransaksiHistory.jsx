import PropTypes from "prop-types";
import { getAllTransaction } from "../connection/api";
import { useEffect, useState } from "react";

const TransaksiHistory = () => {
  const [historyTransaction, setHistoryTransaction] = useState([]);

  const getHistory = async () => {
    try {
      const fetching = await getAllTransaction();
      const transactions = fetching.data
      if (transactions) {
        setHistoryTransaction(transactions);
      }
    } catch (err) {
      console.error("error when fetch hisoryTransaction");
    }
  };

  console.log("historyTransaction=", historyTransaction);

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div className="container">
      <h3>Transaksi - History</h3>

      <table className="customer-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>QR Code</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
          {historyTransaction.map((transaction) => (
            <tr key={transaction._id}>
              <td>{new Date(transaction.date).toLocaleString()}</td>
              <td>{transaction.qrCode}</td>
              <td>
                <ul>
                  {transaction.items.map((item, idx) => (
                    <li key={idx}>
                      RFID: {item.rfid}, Jumlah: {item.jumlah}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransaksiHistory.propTypes = {
  qrCode: PropTypes.string,
};

export default TransaksiHistory;
