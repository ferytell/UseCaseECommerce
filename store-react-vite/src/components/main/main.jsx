import { Link, useNavigate  } from 'react-router-dom';
import Footer from "../Footer";


const MainMenu = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // This will navigate back to the previous page
      };

      const handleGO = () => {
         navigate('/register-customer');
      };
    
    

  return (
    <>
      <div className="container">
        <h1>MAIN MENU</h1>

        <button className="button" onClick={handleBack}>Back</button>
        <div className="columnFlex">
          <button  className="button" onClick={handleGO}>Register Customer </button>
          <button className="button">Transaction Customer</button>
          <button className="button">Admin</button>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default MainMenu;
