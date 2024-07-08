import BarangList from "./BarangList";

const CustomerBarangTransaksi = () => {
  return (
    <div>
      <h1>Customer, Barang dan Transaksi - Postgres</h1>
      <BarangList showActions={false} />
    </div>
  );
};

export default CustomerBarangTransaksi;
