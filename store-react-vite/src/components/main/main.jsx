import {  useNavigate  } from 'react-router-dom';



const MainMenu = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // This will navigate back to the previous page
      };

      const handleRegister = () => {
         navigate('/register-customer');
      };

      const handleTransaction = () => {
        navigate('/simpan-transaksi');
     };

     const handleAdmin = () => {
      navigate('/admin-panel');
   };
    
    

  return (
    <>
      <div className="container">
        <h1>MAIN MENU</h1>

        <button className="button" onClick={handleBack}>Back</button>
        <div className="columnFlex">
          <button  className="button" onClick={handleRegister}>Register Customer </button>
          <button className="button" onClick={handleTransaction}>Transaction Customer</button>
          <button className="button" onClick={handleAdmin}>Admin</button>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default MainMenu;
