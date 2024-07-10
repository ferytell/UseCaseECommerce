import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QRCodeGenerator from "./qr/QRCodeGenerator";
import { addCustomer } from "../connection/api";

const RegisterCustomer = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/main-menu");
  };

  const [customers, setCustomers] = useState([]);

  const [newCustomer, setNewCustomer] = useState({
    qrCode: "",
    nama: "",
    wallet: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const generateRandomID = () => {
    return Math.random().toString(36).substr(2, 9);
  };
  const newCustomerWithID = { ...newCustomer, qrCode: generateRandomID() };
  console.log("newCustomerWithID===", newCustomerWithID);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setCustomers([...customers, newCustomerWithID]);

    try {
      await addCustomer(newCustomerWithID);
      // Refetch
      // setRefetch((prev) => !prev);
      // Reset Form
      setNewCustomer({ qrCode: "", nama: "", wallet: 0 });
    } catch (error) {
      console.error(error);
    }
  };

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await addBarang(newBarang);
  //     // Refetch
  //     setRefetch((prev) => !prev);
  //      // Reset Form
  //     setNewBarang({ rfid: "", namaBarang: "", hargaSatuan: 0 });
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   // setCustomers([...customers, newCustomer]);

  // };

  return (
    <div className="container">
      <h1>Customer Register</h1>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="nama"
          placeholder="Name"
          value={newCustomer.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="wallet"
          placeholder="Input ammount"
          value={newCustomer.wallet}
          onChange={handleInputChange}
          required
        />

        <button type="submit" className="button">
          Add Customer
        </button>
      </form>

      <h2>Customer</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.nama} (ID: {customer.qrCode}) {customer.wallet}
          </li>
        ))}
      </ul>
      {newCustomerWithID.nama !== "" && (
        <div>
          <h1>QR Code Generator</h1>
          <QRCodeGenerator data={newCustomerWithID} />
        </div>
      )}
      <button className="button" onClick={handleBack}>
        Main Menu
      </button>
    </div>
  );
};

export default RegisterCustomer;
