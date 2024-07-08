import  { useState, useEffect } from 'react';
import { getDataCustomer } from "../connection/api";

const DetailsCustomer = () => {
  const [customers, setCustomers] = useState([ ]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
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
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCustomers([...customers, newCustomer]);
    setNewCustomer({ qrCode: '', nama: '', wallet: 0 });
  };

  useEffect(() => {
    fetchCustomerData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className="container">
      <h1>Customer Details</h1>
      
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
          placeholder="Email"
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
            
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.qrCode}</td>
              <td>{customer.nama}</td>
              <td>{customer.wallet}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailsCustomer;
