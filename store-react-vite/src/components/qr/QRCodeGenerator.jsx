import QRCode from 'qrcode.react';

// eslint-disable-next-line react/prop-types
const QRCodeGenerator = ({ data }) => {
   
    
  // Convert object data to a JSON string
  const jsonData = JSON.stringify(data);

  return (
    <div>
      <QRCode value={jsonData} size={256} />
    </div>
  );
};


export default QRCodeGenerator;
