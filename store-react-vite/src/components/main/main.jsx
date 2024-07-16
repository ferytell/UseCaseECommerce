import { useNavigate } from "react-router-dom";

const MainMenu = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register-customer");
  };

  const handleTransaction = () => {
    navigate("/simpan-transaksi");
  };

  const handleAdmin = () => {
    navigate("/admin-panel");
  };

  return (
    <>
      <div className="container">
        <h1>MAIN MENU</h1>

        <div className="columnFlex">
          <div className="buttonContainer">
            <button className="buttonMenu" onClick={handleRegister}>
              Register Customer{" "}
            </button>
          </div>
          <div className="buttonContainer">
            <button className="buttonMenu" onClick={handleTransaction}>
              Transaction Customer
            </button>
          </div>
          <div className="buttonContainer">
            <button className="buttonMenu" onClick={handleAdmin}>
              Admin
            </button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default MainMenu;
