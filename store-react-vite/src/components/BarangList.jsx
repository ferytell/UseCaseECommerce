import { useEffect, useState } from 'react';
import { getJavaTest, getDataBarang } from '../connection/api';

const BarangList = () => {
  const [barangData, setBarangData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDataBarang();
        setBarangData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }

      try {
        const fetchingTest = await getJavaTest();
        console.log('fetchingTest==', fetchingTest)
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div>
      <h1>Barang List</h1>
      <table>
        <thead>
          <tr>
            <th>RFID</th>
            <th>Nama Barang</th>
            <th>Harga Satuan</th>
          </tr>
        </thead>
        <tbody>
          {barangData.map((barang) => (
            <tr key={barang.rfid}>
              <td>{barang.rfid}</td>
              <td>{barang.namaBarang}</td>
              <td>{barang.hargaSatuan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BarangList;
