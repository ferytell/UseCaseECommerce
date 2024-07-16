import { useNavigate } from "react-router-dom";
import DetailsCustomer from "../DetailsCustomer";
import InputRFIDCode from "../InputRFIDCode";
import TransaksiHistory from "../TransaksiHistory"

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/main-menu");
  };
  return (
    <div style={{ height: "1500px" }}>
      <h1>Admin Panel</h1>
      <DetailsCustomer />
      
      <InputRFIDCode />

      <TransaksiHistory />
      <div style={{ height: "50px" }}>
        <button className="button" onClick={handleBack}>
          Main Menu
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
