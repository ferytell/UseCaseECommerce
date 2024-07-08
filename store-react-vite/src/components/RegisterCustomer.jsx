import  { useState } from 'react';

const RegisterCustomer = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', wallet: 98700 },
    { id: 2, name: 'Jane Smith', wallet: 95504 },
    // Add more customers as needed
  ]);

  const [newCustomer, setNewCustomer] = useState({
    id: '',
    name: '',
    wallet: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const generateRandomID = () => {
    return Math.random().toString(36).substr(2, 9);
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newCustomerWithID = { ...newCustomer, id: generateRandomID() };
    setCustomers([...customers, newCustomerWithID]);
    setNewCustomer({ id: '', name: '', wallet: 0 });
  };


  return (
    <div className="container">
      <h1>Customer Register</h1>
      
      <form onSubmit={handleFormSubmit}>
       
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newCustomer.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="wallet"
          name="wallet"
          placeholder="Input ammount"
          value={newCustomer.wallet}
          onChange={handleInputChange}
          required
        />
   
        <button type="submit" className="button">Add Customer</button>
      </form>

      <h2>Customer List</h2>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>{customer.name} (ID: {customer.id}) {customer.wallet}</li>
        ))}
      </ul>

    </div>
  );
};

export default RegisterCustomer;
