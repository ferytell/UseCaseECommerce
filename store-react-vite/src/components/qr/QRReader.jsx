import { useState } from "react";
import QrScanner from "react-qr-scanner";
import PropTypes from 'prop-types';

const QRReader = ({setUserData}) => {
  const [qrData, setQrData] = useState("No result");
  const [openQr, setOpenQR] = useState(false);
  
  setUserData(qrData)

  const handleScan = (data) => {
    if (data && data.text) {
      // Parse the JSON string from the 'text' field
      // console.log('data===', data)
      const parsedData = JSON.parse(data.text);
      setQrData(parsedData);
      setUserData(parsedData);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  const toggleScanner = () => {
    setOpenQR((prevOpenQr) => !prevOpenQr);
  };


  return (
    <div className="container">
      <button onClick={toggleScanner} className="button">
        {openQr ? "Close Scanner" : "Open Scanner"}
      </button>
      {openQr && (
        <div>
          <h2>QR Scanner</h2>
          <QrScanner
            delay={300}
            style={previewStyle}
            onError={handleError}
            onScan={handleScan}
          />
        </div>
      )}

<p>
        {qrData !== "No result" ? (
          <>
            <strong>QR Code:</strong> {qrData.qrCode}
            <br />
            <strong>Name:</strong> {qrData.nama}
            <br />
            <strong>Saldo:</strong> {qrData.wallet}
            <br />
            <strong>Tolong Gunakan Data yg sudah teregistrasi</strong>
          </>
        ) : (
          qrData
        )}
      </p>
    </div>
  );
};

QRReader.propTypes = {
  setUserData: PropTypes.func,
  
};

export default QRReader;
