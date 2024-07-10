import { useEffect, useState } from "react";
import { getDataBarang, deleteBarang, editBarang } from "../connection/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPencil, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import PropTypes from 'prop-types';


const BarangList = ({ showActions = true, refetch, showBuy = false, setAddBarang }) => {
  const [barangData, setBarangData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentBarang, setCurrentBarang] = useState(null);

  const fetchDataBarang = async () => {
    try {
      const data = await getDataBarang();
      setBarangData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (rfid) => {
    try {
      await deleteBarang(rfid);
      // refetch for updated data
      fetchDataBarang();
    } catch (error) {
      console.error("Error deleting barang:", error);
      setError(error);
    }
  };

  const handleEdit = (barang) => {
    setCurrentBarang(barang);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentBarang(null);
  };

  const handleSaveChanges = async () => {
    // Logic to save changes (you may need to call an API to update the data)
    try {
      await editBarang(currentBarang);
      fetchDataBarang();
      // Reset Form
      setCurrentBarang(null);
    } catch (error) {
      console.error(error);
    }

    handleCloseModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (currentBarang) {
      setCurrentBarang({
        ...currentBarang,
        [name]: name === "hargaSatuan" ? parseFloat(value) : value,
      });
    }
  };

  const handleAddToBucket = (barang) => {
    // console.log('barang clicked', barang)
    setAddBarang(barang)

    setTimeout(() => {
      setAddBarang(null);
    }, 50);
  
    
  };


  useEffect(() => {
    fetchDataBarang();
  }, []);

  useEffect(() => {
    fetchDataBarang();
  }, [refetch]);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className="container">
      <h3>Daftar Barang</h3>
      <table className="customer-table">
        <thead>
          <tr>
            <th>RFID</th>
            <th>Nama Barang</th>
            <th>Harga Satuan</th>
            {showActions && <th>Action</th>}
            {showBuy && <th>Tambahkan</th>}

          </tr>
        </thead>
        <tbody>
          {barangData.map((barang) => (
            <tr key={barang.rfid}>
              <td>{barang.rfid}</td>
              <td>{barang.namaBarang}</td>
              <td>{barang.hargaSatuan}</td>
              {showActions && (
              <td>
                <div style={{ display: 'flex',paddingInline: "20px", justifyContent: 'center'  }}>
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    onClick={() => handleDelete(barang.rfid)}
                    style={{
                      cursor: "pointer",
                      color: "red",
                      paddingInlineEnd: "20px",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faPencil}
                    onClick={() => handleEdit(barang)}
                    style={{ cursor: "pointer", color: "green" }}
                  />
                </div>
              </td>
              )}
              {showBuy && (
              <td>
                <div style={{ display: 'flex', paddingInline: "20px", justifyContent: 'center' }}>
                  <FontAwesomeIcon
                    icon={faShoppingBasket}
                    onClick={() => handleAddToBucket(barang)}
                    
                    style={{
                      cursor: "pointer",
                      color: "orange",
                      paddingInlineEnd: "20px",
                    }}
                  />
                 
                </div>
              </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={showModal} handleClose={handleCloseModal}>
        {currentBarang && (
          <div>
            <h3>Edit Barang</h3>
            <form>
              <label>
                RFID:
                <input
                  type="text"
                  name="rfid"
                  value={currentBarang.rfid}
                  onChange={handleInputChange}
                  disabled
                />
              </label>
              <label>
                Nama Barang:
                <input
                  type="text"
                  name="namaBarang"
                  value={currentBarang.namaBarang}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Harga Satuan:
                <input
                  type="number"
                  name="hargaSatuan"
                  value={currentBarang.hargaSatuan}
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

BarangList.propTypes = {
  refetch: PropTypes.bool,
  showActions: PropTypes.bool,
  showBuy: PropTypes.bool,
  setAddBarang: PropTypes.func,
};



export default BarangList;
