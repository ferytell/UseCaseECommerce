// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QRReader from "../components/qr/QRReader";
import DetailsCustomer from "../components/DetailsCustomer";
import InputRFIDCode from "../components/InputRFIDCode";
import SimpanTransaksi from "../components/SimpanTransaksi";
import CustomerBarangTransaksi from "../components/CustomerBarangTransaksi";
import TransaksiMongoDB from "../components/TransaksiMongoDB";
import MainMenu from "../components/main/main";
// import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import RegisterCustomer from "../components/RegisterCustomer";

const RoutesConfig = () => (
  <Router>
    {/* <Navigation /> */}
    <Routes>
      <Route path="/main-menu" element={<MainMenu />} />
      <Route path="/qr-reader" element={<QRReader />} />
      <Route path="register-customer" element={<RegisterCustomer />} />
      <Route path="/details-customer" element={<DetailsCustomer />} />
      <Route path="/input-rfid-code" element={<InputRFIDCode />} />
      <Route path="/simpan-transaksi" element={<SimpanTransaksi />} />
      <Route path="/transaksi-mongodb" element={<TransaksiMongoDB />} />
      <Route
        path="/customer-barang-transaksi"
        element={<CustomerBarangTransaksi />}
      />
    </Routes>
    <Footer />
  </Router>
);

export default RoutesConfig;
