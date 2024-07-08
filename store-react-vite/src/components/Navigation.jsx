import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/qr-reader">QR Reader</Link></li>
        <li><Link to="/details-customer">Customer Details</Link></li>
        <li><Link to="/input-rfid-code">Input RFID Code</Link></li>
        <li><Link to="/simpan-transaksi">Simpan Transaksi</Link></li>
        <li><Link to="/customer-barang-transaksi">Customer, Barang dan Transaksi</Link></li>
        <li><Link to="/transaksi-mongodb">Transaksi MongoDB</Link></li>
      </ul>
    </nav>
     
      
    </>
  );
};

export default Navigation;
