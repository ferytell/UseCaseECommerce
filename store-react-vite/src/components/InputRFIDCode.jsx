import { useState } from "react";
import { addBarang } from "../connection/api";
import BarangList from "./BarangList";

const InputRFIDCode = () => {
  const [newBarang, setNewBarang] = useState({
    rfid: "",
    namaBarang: "",
    hargaSatuan: 0,
  });

  const [refetch, setRefetch] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBarang({ ...newBarang, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await addBarang(newBarang);
      // Refetch
      setRefetch((prev) => !prev);
       // Reset Form
      setNewBarang({ rfid: "", namaBarang: "", hargaSatuan: 0 });
    } catch (error) {
      console.error(error);
    }
    // setCustomers([...customers, newCustomer]);
    
  };

  return (
    <div className="container" >
      <h3>TAMBAH DAFTAR BARANG</h3>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="rfid"
          placeholder="RFID"
          value={newBarang.rfid}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="namaBarang"
          placeholder="Name"
          value={newBarang.namaBarang}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="hargaSatuan"
          placeholder="Harga"
          value={newBarang.hargaSatuan}
          onChange={handleInputChange}
          required
        />

        <button type="submit" className="button">
          Add Barang
        </button>
      </form>

      <BarangList showActions={true} refetch={refetch} />
    </div>
  );
};

export default InputRFIDCode;
