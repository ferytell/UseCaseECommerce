import { useNavigate  } from 'react-router-dom';

const SimpanTransaksi = () => {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/main-menu');
 };
    return (
      <div>
        <h1>Simpan Transaksi & Details Belanja</h1>
        {/* Implement transaction saving and shopping details logic */}


        <button className="button" onClick={handleBack}>Main Menu</button>
      </div>
    );
  };
  
  export default SimpanTransaksi;
  