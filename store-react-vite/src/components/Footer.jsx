import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";

const Footer = () => {
  return (
    <div className="footer">
      <h5>Powered by : Vite + React</h5>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
};

export default Footer;
