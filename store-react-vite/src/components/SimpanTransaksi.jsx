import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QRReader from "./qr/QRReader";
import BarangList from "./BarangList";
import CustomerBarangTransaksi from "./CustomerBarangTransaksi";
import { getDataCustomer } from "../connection/api";
import TransaksiMongoDB from "./TransaksiMongoDB";

const SimpanTransaksi = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ qrCode: "", nama: "", wallet: 0 });
  const [updatedWallet, setUpdatedWallet] = useState(null);
  const [showHistory, setShowHistory] = useState(false);
  const [addBarang, setAddBarang] = useState({
    hargaSatuan: 0,
    namaBarang: "",
    rfid: "",
  });
  const [daftarBarang, setDaftarBarang] = useState([]);
  const [customers, setCustomers] = useState([]);

  const handleBack = () => {
    navigate("/main-menu");
  };

  const handleHistory = () => {
    setShowHistory((prevShowHistory) => !prevShowHistory);
  };

  const fetchCustomerData = async () => {
    try {
      const data = await getDataCustomer();
      setCustomers(data);
    } catch (err) {
      console.error("error when fetchCustomerData");
    }
  };

  const isUserExist = (qrCode) => {
    const customer = customers.find((cust) => cust.qrCode === qrCode);
    if (customer) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (userData.qrCode !== "") {
      const customer = customers.find(
        (cust) => cust.qrCode === userData.qrCode
      );
      setUpdatedWallet(customer?.wallet);
    }
  }, [customers, userData]);

  useEffect(() => {
    if (addBarang && addBarang.rfid && addBarang !== null) {
      const addOrUpdateBarang = (existedBarang, newBarang) => {
        const existingIndex = existedBarang.findIndex(
          (barang) => barang.rfid === newBarang.rfid
        );
        if (existingIndex !== -1) {
          return existedBarang.map((barang, index) =>
            index === existingIndex
              ? { ...barang, amount: barang.amount + 1 }
              : barang
          );
        } else {
          return [...existedBarang, { ...newBarang, amount: 1 }];
        }
      };

      setDaftarBarang((prevDaftarBarang) => {
        return addOrUpdateBarang(prevDaftarBarang, addBarang);
      });

      // Reset addBarang to null immediately after
      setAddBarang(null);
    }
  }, [addBarang]);

  useEffect(() => {
    fetchCustomerData();
  }, []);

  return (
    <div>
      <button className="button" onClick={handleBack}>
        Main Menu
      </button>
      <h1>Flow Transaksi & Details Belanja</h1>
      {!isUserExist(userData.qrCode) && (
        <div className="container">
          <h3>User Harus Login/Scan dengan QR Code yg dimiliki</h3>
          <QRReader setUserData={setUserData} />
        </div>
      )}

      {isUserExist(userData.qrCode) && (
        <div className="container">
          <div>User active: {userData.nama}</div>
          <div>Saldo: {updatedWallet}</div>
        </div>
      )}
      {isUserExist(userData.qrCode) && (
        <div className="container">
          <div>you can do transaction here</div>
          <BarangList
            showActions={false}
            showBuy={true}
            setAddBarang={setAddBarang}
          />
        </div>
      )}
      {isUserExist(userData.qrCode) && (
        <CustomerBarangTransaksi
          daftarBarang={daftarBarang}
          setDaftarBarang={setDaftarBarang}
          QrCode={userData.qrCode}
          fetchCustomerData={fetchCustomerData}
        />
      )}
      {isUserExist(userData.qrCode) && (
        <button className="button" onClick={handleHistory}>
          Show History
        </button>
      )}
      
      {/* {!showHistory && <div style={{ height: "100px" }}></div>} */}

      {showHistory && <TransaksiMongoDB qrCode={userData.qrCode} />}
      <div style={{ height: "100px" }}></div>
    </div>
  );
};

export default SimpanTransaksi;
