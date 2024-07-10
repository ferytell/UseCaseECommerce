import { useRef } from 'react';
import QRCode from 'qrcode.react';

// eslint-disable-next-line react/prop-types
const QRCodeGenerator = ({ data }) => {
  const qrRef = useRef(null);


    
  // Convert object data to a JSON string
  const jsonData = JSON.stringify(data);

  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector('canvas');
    // const context = canvas.getContext('2d');
    const size = canvas.width;
    const padding = 20; // Define padding size
    const newSize = size + padding * 2; // New size with padding

    // Create a new canvas with the new size
    const newCanvas = document.createElement('canvas');
    newCanvas.width = newSize;
    newCanvas.height = newSize;
    const newContext = newCanvas.getContext('2d');

    // Fill the new canvas with white background
    newContext.fillStyle = 'white';
    newContext.fillRect(0, 0, newSize, newSize);

    // Draw the original QR code on the new canvas with padding
    newContext.drawImage(canvas, padding, padding, size, size);

    const pngUrl = newCanvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'QRCode.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };


  return (
    <div>
    <div ref={qrRef}>
      <QRCode value={jsonData} size={256} />
    </div>
    <button className="button" onClick={downloadQRCode}>Download QR Code</button>
  </div>
  );
};


export default QRCodeGenerator;
