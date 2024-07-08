import { useState } from "react";
import QrScanner from "react-qr-scanner";
import QRCodeGenerator from "./QRCodeGenerator";

const QRReader = () => {
  const [qrData, setQrData] = useState("No result");
  const [openQr, setOpenQR] = useState(false);
  const [inputData, setInputData] = useState("");
  const [dataInput, setDataInput] = useState("");

  console.log("qrData==", qrData)


  const handleScan = (data) => {
    if (data && data.text) {
      // Parse the JSON string from the 'text' field
      const parsedData = JSON.parse(data.text);
      setQrData(parsedData);
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

  const [data] = useState({
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
  });

  const handleInputChange = (e) => {
    setInputData(e.target.value);

  };


  const convertStringToQRCode = () => {
    setDataInput(JSON.parse(inputData));
  };

  const convertQRCodeToString = () => {
    setInputData(JSON.stringify(data));
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
            <strong>ID:</strong> {qrData.id}
            <br />
            <strong>Name:</strong> {qrData.name}
            <br />
            <strong>Email:</strong> {qrData.email}
            <br />
            <strong>Phone:</strong> {qrData.phone}
          </>
        ) : (
          qrData
        )}
      </p>

      <div>
        <h1>QR Code Generator</h1>
        <QRCodeGenerator data={data} />
      </div>


      <div>
        <h2>Convert QR Code to String</h2>
        <button onClick={convertQRCodeToString}>Convert QR to String</button>
        <textarea
          value={inputData}
          onChange={handleInputChange}
          rows="4"
          cols="50"
        />
        <h2>Convert String to QR Code</h2>
        <button onClick={convertStringToQRCode}>Convert String to QR</button>
      </div>
    </div>
  );
};

export default QRReader;
