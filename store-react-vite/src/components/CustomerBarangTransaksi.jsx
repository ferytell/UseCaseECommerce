import PropTypes from "prop-types";
import { createTransaction } from "../connection/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// import { useEffect } from "react";

const CustomerBarangTransaksi = ({
  daftarBarang = [],
  setDaftarBarang,
  QrCode,
  fetchCustomerData,
}) => {
  const transactions = daftarBarang.map((item) => ({
    qrCode: QrCode,
    rfid: item.rfid,
    jumlah: item.amount,
  }));

  const doTransactions = async () => {
    try {
      const payload = { transactions: transactions };
      const transaction = await createTransaction(payload);
      if (transaction.status === 201) {
        setDaftarBarang([]);
        fetchCustomerData();
      }
    } catch (err) {
      console.error("error when fetchCustomerData");
    }
  };

  const handleClick = () => {
    doTransactions();
    console.log("test");
  };

  const handleDelete = (rfid) => {
    const updatedDaftarBarang = daftarBarang.filter(
      (barang) => barang.rfid !== rfid
    );
    setDaftarBarang(updatedDaftarBarang);
  };

  return (
    <div>
      <div className="container">
        <h3>Keranjang</h3>
        <table className="customer-table">
          <thead>
            <tr>
              <th>Nama Barang</th>
              <th>Harga Satuan</th>
              <th>Jumlah</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {daftarBarang.map((barang) => (
              <tr key={barang.rfid}>
                <td>{barang.namaBarang}</td>
                <td>{barang.hargaSatuan}</td>
                <td>{barang.amount}</td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      paddingInline: "20px",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      onClick={() => handleDelete(barang.rfid)}
                      style={{
                        cursor: "pointer",
                        color: "red",
                        paddingInlineEnd: "20px",
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <br />
        </div>

        <button
          className={"button"}
          disabled={daftarBarang.length < 1}
          onClick={handleClick}
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

CustomerBarangTransaksi.propTypes = {
  daftarBarang: PropTypes.arrayOf(
    PropTypes.shape({
      rfid: PropTypes.string.isRequired,
      namaBarang: PropTypes.string.isRequired,
      hargaSatuan: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ),
  setDaftarBarang: PropTypes.func,
  QrCode: PropTypes.string,
  fetchCustomerData: PropTypes.func,
};

export default CustomerBarangTransaksi;
