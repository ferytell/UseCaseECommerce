import PropTypes from "prop-types";
import { getDataHistory } from "../connection/api";
import { useEffect, useState } from "react";

const TransaksiMongoDB = ({ qrCode }) => {
  const [historyTransaction, setHistoryTransaction] = useState([]);

  const getHistory = async () => {
    try {
      const fetching = await getDataHistory(qrCode);
      if (fetching) {
        setHistoryTransaction(fetching);
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
            <th>Nama Barang</th>
            <th>Harga Satuan</th>
            <th>Jumlah</th>
          </tr>
        </thead>
        <tbody>
          {historyTransaction.map((history) => (
            <tr key={history.id}>
              <td>{history.rfid}</td>
              <td>{history.tanggalJam}</td>
              <td>
                <div
                  style={{
                    display: "flex",
                    paddingInline: "20px",
                    justifyContent: "center",
                  }}
                ></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransaksiMongoDB.propTypes = {
  qrCode: PropTypes.string,
};

export default TransaksiMongoDB;
