import  { useState } from 'react';

const DetailsCustomer = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' },
    // Add more customers as needed
  ]);

  const [newCustomer, setNewCustomer] = useState({
    id: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCustomers([...customers, newCustomer]);
    setNewCustomer({ id: '', name: '', email: '', phone: '' });
  };

  return (
    <div className="container">
      <h1>Customer Details</h1>
      
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={newCustomer.id}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newCustomer.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newCustomer.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={newCustomer.phone}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="button">Add Customer</button>
      </form>

      <table className="customer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailsCustomer;
