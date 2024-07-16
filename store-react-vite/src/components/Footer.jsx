import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import springLogo from "/springio.svg"
import mongoLogo from "/mongodb.svg"
import postgresqLogo from "/postgresql-icon.svg"
import expressjsLogo from "/expressjs.svg"

const Footer = () => {
  return (
    <div className="footer">
      <h5>Powered by : </h5>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <a href="https://spring.io/" target="_blank">
        <img src={springLogo} className="logo" alt="Spring logo" />
      </a>
      <a href="https://www.mongodb.com/" target="_blank">
        <img src={postgresqLogo} className="logo" alt="PostgreSql logo" />
      </a>
      <a href="https://www.mongodb.com/" target="_blank">
        <img src={expressjsLogo} className="logo" alt="ExpressJS logo" />
      </a>
      <a href="https://www.mongodb.com/" target="_blank">
        <img src={mongoLogo} className="logo" alt="MongoDB logo" />
      </a>
    </div>
  );
};

export default Footer;
