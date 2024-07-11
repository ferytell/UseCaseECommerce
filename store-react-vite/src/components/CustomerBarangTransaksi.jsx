import PropTypes from "prop-types";
import { getExpressData } from "../connection/api";
import { useEffect } from "react";

const CustomerBarangTransaksi = ({ daftarBarang, QrCode }) => {
  const transactions = daftarBarang.map((item) => ({
    qrCode: QrCode,
    rfid: item.rfid,
    jumlah: item.amount,
  }));

  console.log("=====", transactions);

  const fetchCustomerData = async () => {
    try {
      const data = await getExpressData();
      console.log(data);
    } catch (err) {
      console.error("error when fetchCustomerData");
    }
  };

  const handleClick = () =>{
    fetchCustomerData();
    console.log('test')
  }
  useEffect(() => {
    fetchCustomerData();
  }, []);

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
            </tr>
          </thead>
          <tbody>
            {daftarBarang.map((barang) => (
              <tr key={barang.rfid}>
                <td>{barang.namaBarang}</td>
                <td>{barang.hargaSatuan}</td>
                <td>{barang.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          --
          <br />
          --
        </div>

        <button className="button" onClick={ handleClick}>
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
  QrCode: PropTypes.string,
};

export default CustomerBarangTransaksi;
