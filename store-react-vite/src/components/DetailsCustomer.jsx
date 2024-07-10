import  { useState, useEffect } from 'react';
import { deleteCustomer, getDataCustomer, editCustomer } from "../connection/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPencil } from "@fortawesome/free-solid-svg-icons";
import Modal from './Modal';

const DetailsCustomer = () => {
  const [customers, setCustomers] = useState([ ]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState(null);

  // const [customerData, setCustomerData] = useState([]);

  const fetchCustomerData = async () => {
    try {
      const data = await getDataCustomer();
      setCustomers(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }

  };


  const [newCustomer, setNewCustomer] = useState({
    qrCode: '',
    nama: '',
    wallet: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
    if (currentCustomer) {
      setCurrentCustomer({
        ...currentCustomer,
        [name]: name === "wallet" ? parseFloat(value) : value,
      });
    }
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   if (currentBarang) {
  //     setCurrentBarang({
  //       ...currentBarang,
  //       [name]: name === "hargaSatuan" ? parseFloat(value) : value,
  //     });
  //   }
  // };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCustomers([...customers, newCustomer]);
    setNewCustomer({ qrCode: '', nama: '', wallet: 0 });
  };

  const handleDelete = async (rfid) => {
    try {
      await deleteCustomer(rfid);
      // refetch for updated data
      fetchCustomerData();
    } catch (error) {
      console.error("Error deleting barang:", error);
      setError(error);
    }
  };

  const handleEdit = (barang) => {
    setCurrentCustomer(barang);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentCustomer(null);
  };

  const handleSaveChanges = async () => {
    // Logic to save changes (you may need to call an API to update the data)
    try {
      await editCustomer(currentCustomer);
      fetchCustomerData();
      // Reset Form
      setCurrentCustomer(null);
    } catch (error) {
      console.error(error);
    }

    handleCloseModal();
  };


  useEffect(() => {
    fetchCustomerData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className="container">
      <h3>DAFTAR CUSTOMER</h3>
      
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="qrCode"
          placeholder="QR Code"
          value={newCustomer.qrCode}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="nama"
          placeholder="Nama"
          value={newCustomer.nama}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="wallet"
          placeholder="Saldo"
          value={newCustomer.wallet}
          onChange={handleInputChange}
          required
        />
       
        <button type="submit" className="button">Add Customer</button>
      </form>

      <table className="customer-table">
        <thead>
          <tr>
            <th>QR Code</th>
            <th>Nama</th>
            <th>Saldo</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.qrCode}>
              <td>{customer.qrCode}</td>
              <td>{customer.nama}</td>
              <td>{customer.wallet}</td>
              <td>
                <div style={{ paddingInline: "20px" }}>
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    onClick={() => handleDelete(customer.qrCode)}
                    style={{
                      cursor: "pointer",
                      color: "red",
                      paddingInlineEnd: "20px",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faPencil}
                    onClick={() => handleEdit(customer)}
                    style={{ cursor: "pointer", color: "green" }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={showModal} handleClose={handleCloseModal}>
        {currentCustomer && (
          <div>
            <h3>Edit Barang</h3>
            <form>
              <label>
                QR Code:
                <input
                  type="text"
                  name="qrCode"
                  value={currentCustomer.qrCode}
                  onChange={handleInputChange}
                  disabled
                />
              </label>
              <label>
                Nama Customer:
                <input
                  type="text"
                  name="nama"
                  value={currentCustomer.nama}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Fund:
                <input
                  type="number"
                  name="wallet"
                  value={currentCustomer.wallet}
                  onChange={handleInputChange}
                />
              </label>
            </form>
            <button className="button" onClick={handleSaveChanges}>
              Save Changes
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default DetailsCustomer;
